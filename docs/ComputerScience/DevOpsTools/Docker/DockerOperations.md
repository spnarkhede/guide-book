---
sidebar_position: 3
---

# Docker Operations

This guide provides step-by-step commands for Docker installation and basic container operations.

---

## Docker Installation

| Command                                | Description                                             |
|:---------------------------------------|---------------------------------------------------------|
| `apt update`                           | Updates the package sources with the latest versions    |
| `apt install docker.io -y`             | Installs Docker in Ubuntu Linux distribution            |
| `systemctl start docker`               | Starts Docker services                                  |
| `systemctl stop docker`                | Stops Docker services                                   |
| `systemctl restart docker`             | Stops and starts Docker services                        |
| `systemctl status docker`              | Checks the status of Docker services                    |

---

## Container Operations

| Command                                                                | Description                                |
|:-----------------------------------------------------------------------|--------------------------------------------|
| `docker container create --name web -it alpine sh`                     | Creates a named container                  |
| `docker container start web`                                           | Starts a container                         |
| `docker container stop web`                                            | Stops a container                          |
| `docker container restart web`                                         | Stops and starts a container               |
| `docker container run -it --name myweb alpine sh`                      | Creates and starts a named container       |
| `Ctrl + p, Ctrl + q`                                                   | Detaches from the container                |
| `docker container attach myweb`                                        | Attaches to a running container            |
| `docker container logs myweb`                                          | Shows the logs of the container            |
| `docker container rename myweb myalpine`                               | Changes the name of a container            |
| `docker container run -h alpine -it --rm alpine sh`                    | Sets the hostname of a container           |
| `docker container run -it -w /var --rm alpine sh`                      | Sets the current working directory         |
| `docker container run -it --env "WEB_HOST=172.168.1.1" --rm alpine sh` | Sets the environment variables |

---

## Docker Management

| Command                                | Description                                                 |
|:---------------------------------------|-------------------------------------------------------------|
| `docker version`                       | Prints the current Docker version                           |
| `docker info`                          | Displays system-wide information                            |
| `docker login`                         | Logs in to a DockerHub registry                             |
| `docker logout`                        | Logs out from DockerHub registry                            |
| `docker inspect [object]`              | Displays detailed information on one or more objects        |
| `docker --help`                        | Lists help for any Docker command                           |
| `docker image [option]`                | Manages images                                              |
| `docker container [option]`            | Manages containers                                          |
| `docker volume [option]`               | Manages volumes                                             |
| `docker network [option]`              | Manages networks                                            |

---

## Listing Commands

| Command                                | Description                                                 |
|:---------------------------------------|-------------------------------------------------------------|
| `docker image ls`                      | Lists all images                                            |
| `docker image ls --digests`            | Lists image digests                                         |
| `docker container ls`                  | Lists running containers                                    |
| `docker container ls -a`               | Lists all containers (running and stopped)                  |
| `docker container ls -q`               | Lists only the container IDs                                |
| `docker volume ls`                     | Lists all volumes                                           |
| `docker network ls`                    | Lists all networks                                          |

---

## Docker Images

| Command                                                         | Description                                            |
|:----------------------------------------------------------------|--------------------------------------------------------|
| `docker search nginx`                                           | List available images on DockerHub                     |
| `docker image pull nginx`                                       | Pull an image from DockerHub                           |
| `docker image pull myregistry.com:8080/alpine:latest`           | Pull an image from a private registry                  |
| `vim Dockerfile`                                                | Edit Dockerfile                                        |
| `FROM alpine RUN date > /data`                                  | Dockerfile to build an image                           |
| `docker image build -t php/alpine:dockerfile .`                 | Create an image from a Dockerfile                      |
| `docker container run -it --name myimage alpine sh`             | Run a container and modify it                          |
| `/ # date > /data` and `/ # cat /data`                          | Save data to a file and display it                     |
| `docker container diff myimage`                                 | Check differences with the base image                  |
| `docker container commit myimage php/alpine:test`               | Save a running container as an image                   |
| `docker container run -it php/alpine:test sh` and  `cat /data`  | Run the created image as a container                   |
| `docker image push php/alpine:test`                             | Push the image to DockerHub registry                   |

---

## Docker Volumes

| Command                                                                                          | Description                                              |
|:-------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| `docker container run -itv /data --name myvol alpine sh`                                         | Create and mount a directory on the host system          |
| `docker volume create --name myvolume`                                                           | Create a named volume                                    |
| `docker container run -itv myvolume:/data --name cmyvol alpine sh`                               | Mount a named volume                                     |
| `docker system df`                                                                               | Display information about disk storage                   |

---

## Docker Networking

| Command                                                                                          | Description                                              |
|:-------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| `docker container run -d --name myweb -p 8080:80 nginx`                                          | Access the container from the external world             |
| `docker container run -d --name myweb1 -P nginx:alpine`                                          | Expose a container port to a random host port            |
| `docker container run -it --network=none alpine sh`                                              | Prevent Docker daemon from creating a network interface  |
| `docker container run -it --network=host alpine sh`                                              | Share host's network namespace with the container        |
| `docker container run -it --network=container:myweb1 alpine sh`                                  | Share network namespace of an existing container         |
| `docker network create mynetwork`                                                                | Create a user-defined network                            |
| `docker container run -d --name nginxnet --network=mynetwork nginx:alpine`                       | Create a container and attach it to the network          |
| `docker network connect mynetwork web`                                                           | Attach a running container to a network                  |
| `docker network disconnect mynetwork web`                                                        | Disconnect a container from a specific network           |

---

## Docker Resource Allocation

| Command                                                                                          | Description                                              |
|:-------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| `docker container run -it --ulimit nproc=10 --rm alpine sh`                                      | Set the maximum number of processes for the container    |
| `docker container run -d --name cpulimit --cpuset-cpus="0" alpine top`                           | Restrict the container to CPU "0"                        |
| `docker container run -d --name memlimit --memory "200m" alpine top`                             | Limit the maximum memory usage                           |

---