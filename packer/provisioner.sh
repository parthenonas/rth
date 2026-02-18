#!/bin/bash
set -e

# Proxy setting
# export http_proxy="http://<username>:<passwd>@<host>:<port>"
# export https_proxy="http://<username>:<passwd>@<host>:<port>"

export DEBIAN_FRONTEND=noninteractive

# System upgrade
sudo apt-get update -qq
sudo -E apt-get upgrade -y -qq

# Basic packages installation
sudo -E apt-get install -y -qq curl unzip git cpu-checker open-vm-tools linux-headers-$(uname -r) build-essential pkg-config libssl-dev

# ZFS installation
echo "zfs-dkms zfs-dkms/note-check-binary bool true" | sudo debconf-set-selections
sudo -E apt-get install -y -qq zfs-dkms zfsutils-linux

# Open vSwitch installation
sudo -E apt-get install -y -qq openvswitch-switch
if ! getent group openvswitch >/dev/null; then
    sudo groupadd --system openvswitch
fi
sudo chown root:openvswitch /var/run/openvswitch/db.sock 2>/dev/null || true
sudo chmod 0660 /var/run/openvswitch/db.sock 2>/dev/null || true
sudo systemctl restart openvswitch-switch 2>/dev/null || true

# Incus installation
sudo -E apt-get install -y -qq incus
sudo incus admin init --preseed < /tmp/incus-init.yaml

# Rust installation
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
export PATH="$HOME/.cargo/bin:$PATH"

# fnm installation
curl -fsSL https://fnm.vercel.app/install | bash
export PATH="$HOME/.local/share/fnm:$PATH"
eval "$(fnm env --use-on-cd)"

# Node.js installation
fnm install --lts

sudo usermod -aG incus-admin,kvm,openvswitch,incus $USER

# Clean up
sudo -E apt-get clean
sudo sync
