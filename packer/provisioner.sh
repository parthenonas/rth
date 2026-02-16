#!/bin/bash
set -e

# Proxy setting
# export http_proxy="http://<username>:<passwd>@<host>:<port>"
# export https_proxy="http://<username>:<passwd>@<host>:<port>"

# System upgrade
sudo apt-get update
sudo DEBIAN_FRONTEND=noninteractive apt-get upgrade -y

# Basic packages installation
sudo DEBIAN_FRONTEND=noninteractive apt-get install -y curl unzip git cpu-checker open-vm-tools linux-headers-amd64 build-essential pkg-config libssl-dev

# ZFS installation
echo "zfs-dkms zfs-dkms/note-check-binary bool true" | sudo debconf-set-selections
sudo DEBIAN_FRONTEND=noninteractive apt-get install -y zfs-dkms zfsutils-linux

# Open vSwitch and Incus installation
sudo apt-get install -y openvswitch-switch incus
sudo incus admin init --preseed < /tmp/incus-init.yaml

# Rust installation
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
source "$HOME/.cargo/env"

# fnm and Node.js installation
curl -fsSL https://fnm.vercel.app | bash -s -- --skip-shell
export PATH="$HOME/.local/share/fnm:$PATH"
eval "$(fnm env --use-on-cd)"
fnm install --lts


echo 'export PATH="$HOME/.local/share/fnm:$PATH"' >> ~/.bashrc
echo 'eval "$(fnm env --use-on-cd)"' >> ~/.bashrc

sudo usermod -aG incus-admin,kvm,openvswitch,incus vagrant

# Clean up
sudo apt-get clean
sudo sync
