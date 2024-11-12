Here's a simplified and clear `README.md` for your Dockerized Angular project setup:

---

# Dockerize Angular Project Setup

This guide will help you set up and dockerize an Angular application with Nginx.

## Installation Requirements

### Tools Required

1. **Angular Project Setup**:
    - **Node.js**
    - **npm** (Node Package Manager)
    - **Angular CLI**: Install globally using:
      ```bash
      npm install -g @angular/cli
      ```
    - **Docker**

2. **Nginx Installation**:
    - Install a lightweight Nginx server to serve the Angular app.
    - Download Nginx:
        - [For Windows](https://nginx.org/en/docs/windows.html)
        - [All versions](https://nginx.org/en/download.html) (Use the stable `.zip` file)
    - **Setup on Windows**:
        - Extract `nginx-1.26.2` to `C:/`.
        - Open **Command Prompt as Administrator** and run:
          ```bash
          cd C:/nginx-1.26.2
          .\nginx.exe
          ```
        - Open [localhost:8080](http://localhost:8080) in a browser. You should see:
          ```
          Welcome to nginx!
          If you see this page, the nginx web server is successfully installed and working.
          ```

      **Note**: If you see an error like `bind() to 0.0.0.0:80 failed (10013: An attempt was made to access a socket in a way forbidden by its access permissions)`:
        - Edit `C:\nginx-1.26.2\conf\nginx.conf` and update:
          ```nginx
          server {
              listen       8080;
              server_name  localhost;
          }
          ```

### Angular Project Setup

1. Create a new Angular project:
   ```bash
   ng new dockerize-angular
   cd dockerize-angular
   ng serve
   ```

2. Verify the application by navigating to [http://localhost:4200](http://localhost:4200).

## Dockerfile Configuration

1. Create a `Dockerfile` in the root of your Angular project directory with the following content:

   ```dockerfile
   # Stage 1: Build the Angular app
   FROM node:21.6.1-alpine AS build

   # Set environment variables
   ARG GHP_RO_TOKEN
   ENV GHP_RO_TOKEN=${GHP_RO_TOKEN}

   # Create app directory
   WORKDIR /app

   # Copy source code
   COPY ./ /app/

   # Install dependencies and build the Angular app
   RUN npm install
   RUN npm run build 

   # Stage 2: Serve with NGINX
   FROM nginx:alpine

   # Copy the built app from the previous stage
   COPY --from=build /app/dist/dockerize-angular /usr/share/nginx/html

   # Replace the default NGINX configuration
   RUN rm -rf /etc/nginx/conf.d/default.conf
   COPY nginx/confignginx.conf /etc/nginx/conf.d/confignginx.conf

   # Expose port 8080
   EXPOSE 8080

   # Run NGINX
   CMD ["nginx", "-g", "daemon off;"]
   ```

2. Create a folder named `nginx` in the root directory and add the `confignginx.conf` file for custom NGINX configuration.

## Building and Running the Docker Container

1. Build the Docker image:
   ```bash
   docker build -t dockerize-angular .
   ```

2. List Docker images to confirm the build:
   ```bash
   docker images
   ```

3. Run the Docker container on port 3600 (mapped to Nginx’s port 8080):
   ```bash
   docker run -p 3600:8080 dockerize-angular
   ```

4. Open [http://localhost:3600](http://localhost:3600) in your browser to view the running Angular app.

---

This `README.md` provides a clear step-by-step setup guide to help users install dependencies, configure Nginx, set up the Dockerfile, and run the Dockerized Angular application.