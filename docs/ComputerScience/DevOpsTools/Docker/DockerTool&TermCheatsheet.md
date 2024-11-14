---
sidebar_position: 4
---

# Docker Tool & Terms Cheat Sheet

## Table of Contents

1. [Container Tools](#container-tools)
2. [Aliases](#aliases)
3. [Terms](#terms)
4. [Troubleshooting](#troubleshooting)
5. [Docker `ps` Columns](#docker-ps-columns)
6. [Xdebug with Docker](#xdebug-with-docker)

---

## Container Tools

- **`docker ps`**  
  Lists all currently running containers.

- **`docker ps -a`**  
  Lists all containers, including stopped ones.

- **`docker logs <CONTAINER>`**  
  Shows the output of the specified container.

- **`docker rm <CONTAINER>`**  
  Removes the specified container(s), including any local data changes.

- **`docker rm -f <CONTAINER>`**  
  Forcefully stops and removes the specified container(s).

- **`docker start <CONTAINER>`**  
  Attempts to start a stopped container.

- **`docker stop <CONTAINER>`**  
  Attempts to stop a running container.

- **`docker restart <CONTAINER>`**  
  Stops and then starts the specified container.

- **`docker cp <SRC> <DEST>`**  
  Copies files between a container and the local filesystem.
    - Container path format: `<CONTAINER>:<PATH_ON_CONTAINER>`

- **`docker exec -it <CONTAINER> bash`**  
  Starts a bash terminal session within the specified container.

---

## Aliases

- **`docker_build`**  
  Runs `docker compose` followed by a build command.

- **`docker_build_js`**  
  Builds front-end components using `yarn run compile`.

- **`docker_compose`**  
  Installs dependencies defined in `composer.lock` without updating.

- **`docker_start`**  
  Runs all containers as defined in `docker-compose.yml` with the default command.

- **`dockerize`**  
  Logs into AWS to pull new images.

- **`src_sync`**  
  Copies source code into all running containers to ensure they are up to date.

---

## Terms

- **Image**  
  A snapshot of a lightweight filesystem used to run specific tasks.

- **Container**  
  An instantiation of an environment created from a specific image.

- **File Cabinet**  
  A file mount shared across all containers.

---

## Troubleshooting

- **`docker ps -a`**  
  Use this command to identify containers that aren't starting, especially if there are linking errors.

- **`docker logs <CONTAINER>`**  
  Retrieve specific logs and errors for a container to troubleshoot issues.

- **`src_sync`**  
  Use this command if logs reveal that files cannot be found.

- **`docker_build / build_js / compose`**  
  Use if parameters or dependencies seem incorrect.

- **`docker rm <CONTAINER>`**  
  Use if a file is corrupt in a container. **Note:** Avoid removing data containers as it can take a long time to download them again.

- **`docker_cache_clear / docker_cache_force_clear`**  
  Use if annotations or other cached assets appear corrupt or not updating.

---

## Docker `ps` Columns

- **NAMES**  
  The name of the container, interchangeable with `CONTAINER ID` for referencing a specific container.

- **CONTAINER ID**  
  The unique identifier for the container, interchangeable with `NAMES`.

- **IMAGE**  
  The image that the container environment is running on.

- **COMMAND**  
  The command(s) the container runs when started.

- **CREATED**  
  The date and time when the container was first created.

- **STATUS**  
  Displays the current status of the container, including exit codes if it has stopped.

- **PORTS**  
  Shows external-to-internal port mapping and protocol.

---


## Xdebug Setup for Docker

This guide provides the steps to set up Xdebug for a Docker container running PHP. Follow the instructions to configure Xdebug for remote debugging.

---

## Steps

1. **Set Up Localhost Alias**

   Run the following command to set up a localhost alias:

   ```bash
   sudo ifconfig lo0 alias 10.254.254.254
   ```

2. **Access the Web Server Container**

   Execute the command below to open a bash session inside the `webserver` container:

   ```bash
   docker exec -it webserver bash
   ```

3. **Edit Xdebug Configuration**

   Open the Xdebug configuration file in `vi`:

   ```bash
   vi /etc/php.d/xdebug.ini
   ```

4. **Modify Configuration Settings**

    - Press `i` to enter insert mode.
    - Use arrow keys to navigate, then update the following settings:

      ```plaintext
      xdebug.remote_connect_back=0
      xdebug.remote_host=10.254.254.254
      xdebug.remote_autostart=1
      ```

5. **Save and Exit `vi`**

    - Press `Esc` to exit insert mode.
    - Type `:wq` and press `Enter` to save changes and quit `vi`.

6. **Exit the Container**

   Run `exit` to leave the container’s bash session:

   ```bash
   exit
   ```

7. **Restart the Web Server Container**

   Apply the new Xdebug configuration by restarting the container:

   ```bash
   docker restart webserver
   ```

---

After completing these steps, Xdebug will be configured for remote debugging on your Docker web server container.
```
docker restart webserver
