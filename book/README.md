# Deploy

## Prerequisites

 - Installed Docker Engine ([official manual](https://docs.docker.com/engine/install/))

## Clone and launch

Run these commands to clone the develop branch and start the containers in detached mode:

```sh
git clone --depth 1 --branch develop https://github.com/parthenonas/rth.git
cd rth/book/
docker compose up --build -d
```

## Verify Status

Check if all services are running correctly:

```sh
docker compose ps
```

To view real-time logs for troubleshooting:

```sh
docker compose logs -f
```

## Management Commands

- Stop services: `docker compose stop`
- Down (remove): `docker compose down` &ndash; stops and removes containers and networks.
- Update & Rebuild: To pull the latest changes and rebuild the project, run:
    ```sh
    git pull origin develop
    docker compose up --build -d
    ```