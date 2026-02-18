# rthdev — Disposable Developer VM for VMware Workstation Pro

Packer template that builds a **Debian 13.3.0** virtual machine image (.vmx / .vmdk) with **Incus** (system containers), **ZFS**, **Rust**, **Node.js (via fnm)** and basic developer tools — ready for quick local experimentation and development.

The final artifact is a **Vagrant box** compatible with the VMware provider.

## Requirements

Before you start, make sure the following software is installed and working:

- [Packer](https://developer.hashicorp.com/packer/install)
- [VMware Workstation Pro 25H2](https://knowledge.broadcom.com/external/article/344595/downloading-and-installing-vmware-workst.html)

Optional but very useful:

- [make](https://www.gnu.org/software/make/) (GNU Make) — to use the provided Makefile

## Quick Start

To build the VM box with `make` execute command in current directory

```sh
make build
```

Or without

```sh
packer init .
packer build .
```
