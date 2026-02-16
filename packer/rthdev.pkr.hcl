packer {
  required_plugins {
    vmware = {
      version = "= 1.2.0"
      source  = "github.com/hashicorp/vmware"
    }
    vagrant = {
      version = "= 1.1.6"
      source  = "github.com/hashicorp/vagrant"
    }
  }
}

# Link to reference https://developer.hashicorp.com/packer/integrations/vmware/vmware/latest/components/builder/iso
source "vmware-iso" "rthdev" {
  # VMware Workstation Pro 25H2 Version >= 25.0.0.24995812 Settings
  guest_os_type = "debian13_64Guest"
  version = "22" # https://knowledge.broadcom.com/external/article?articleNumber=315655

  cpus = 4
  memory = 8192
  disk_size = 16000
  disk_additional_size  = [32000]
  disk_type_id = "0"   # for growable virtual disk contained in a single file (monolithic sparse)
  network_adapter_type = "vmxnet3"

  vmx_data = {
    "vhv.enable" = "TRUE" # for nested virtualization
    "hgfs.enabled" = "TRUE" # for shared folders
  }

  # iso_url              = "https://cdimage.debian.org/debian-cd/13.3.0/amd64/iso-dvd/debian-13.3.0-amd64-DVD-1.iso"
  iso_url              = "./debian-13.3.0-amd64-DVD-1.iso"
  iso_checksum         = "file:https://cdimage.debian.org/debian-cd/13.3.0/amd64/iso-dvd/SHA256SUMS"

  # SSH settings
  communicator           = "ssh"
  ssh_username           = "vagrant"
  ssh_password           = "vagrant"
  ssh_timeout            = "30m"
  ssh_handshake_attempts = 1000

  # Preseed settings
  http_directory = "http"
  boot_wait      = "5s"
  # install auto=true priority=critical hostname=rthdev domain=local preseed/url=http://192.168.153.1/preseed.txt 
  boot_command = [
    "<esc><wait>",
    "install <wait>",
    "auto=true <wait>",
    "priority=critical <wait>",
    "hostname=rthdev <wait>",
    "domain=local <wait>",
    "preseed/url=http://{{ .HTTPIP }}:{{ .HTTPPort }}/preseed.txt <wait>",
    "<enter>"
  ]

  shutdown_command = "echo 'vagrant' | sudo -S shutdown -P now" # for gracefully shutdown
}

build {
  sources = ["source.vmware-iso.rthdev"]

  provisioner "shell" {
    execute_command = "echo 'vagrant' | sudo -S bash '{{ .Path }}'"
    inline = [
      "echo 'vagrant ALL=(ALL) NOPASSWD: ALL' > /etc/sudoers.d/vagrant",
      "chmod 0440 /etc/sudoers.d/vagrant"
    ]
  }

  provisioner "file" {
    source      = "incus-init.yaml"
    destination = "/tmp/incus-init.yaml"
  }

  provisioner "shell" {
    execute_command = "bash '{{ .Path }}'"
    script = "provisioner.sh"
  }

  post-processor "vagrant" {
    output              = "rthdev-{{ .Provider }}.box"
    provider_override   = "vmware"
    keep_input_artifact = false
  }
}