Vagrant.configure("2") do |config|
  config.vm.box = "rthdev"
  
  config.vm.provider "vmware_desktop" do |v|
    v.cpus = 4
    v.memory = 8192
    v.vmx["vhv.enable"] = "TRUE"
    # vagrant up --gui
    v.gui = ARGV.include?("--gui")

  end

  config.vm.synced_folder ".", "/home/vagrant/rth",
    create: true,
    owner: "vagrant",
    group: "vagrant"

  config.ssh.username = "vagrant"
  config.ssh.password = "vagrant"
  config.ssh.insert_key = false

end
