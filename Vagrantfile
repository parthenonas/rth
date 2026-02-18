Vagrant.configure("2") do |config|
  config.vm.box = "rthdev"
  config.vm.provider "vmware_desktop" do |vb|
    vb.cpus = 4
    vb.memory = 8192
    vb.vmx["vhv.enable"] = "TRUE"
  end

  config.vm.synced_folder ".", "/home/vagrant/rth",
    create: true,
    owner: "vagrant",
    group: "vagrant"

  config.ssh.username = "vagrant"
  config.ssh.password = "vagrant"
  config.ssh.insert_key = false

end
