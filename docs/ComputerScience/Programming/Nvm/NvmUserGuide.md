---
author: spnarkhede
authorTitle: DevOps Engineer
authorURL: https://github.com/spnarkhede
authorImageURL: https://github.com/spnarkhede
tags: [Strategic, Mindset, Book, Learnings]
--- 

# NVM Basic Notes

**Node Version Manager (NVM)** is a tool that allows you to easily manage multiple versions of Node.js on a single machine. This guide will walk you through how to use NVM effectively.

---

## Table of Contents
1. [Installation](#installation)
2. [Basic NVM Commands](#basic-nvm-commands)
    - [Check Node Version](#check-node-version)
    - [List Locally Installed Versions of Node](#list-locally-installed-versions-of-node)
    - [List Remote Available Versions of Node](#list-remote-available-versions-of-node)
    - [Install a Specific Version of Node](#install-a-specific-version-of-node)
    - [Install Latest LTS Version of Node](#install-latest-lts-version-of-node)
    - [Install Latest Stable Version of Node](#install-latest-stable-version-of-node)
    - [Switch Node Version](#switch-node-version)
    - [Set Default Version of Node](#set-default-version-of-node)
3. [Additional NVM Commands](#additional-nvm-commands)
    - [Run a Node.js Script with a Specific Version](#run-a-nodejs-script-with-a-specific-version)
    - [Execute a Command with a Specific Node Version](#execute-a-command-with-a-specific-node-version)
    - [Set Alias for a Node Version](#set-alias-for-a-node-version)
    - [Use the Latest Version of Node](#use-the-latest-version-of-node)
    - [Use the Latest LTS Version of Node](#use-the-latest-lts-version-of-node)
4. [Managing Node Versions](#managing-node-versions)
    - [Uninstall a Specific Node Version](#uninstall-a-specific-node-version)
    - [Uninstall the Latest LTS Version](#uninstall-the-latest-lts-version)
    - [Uninstall NVM](#uninstall-nvm)
5. [Working with Packages](#working-with-packages)
    - [Install Global Packages for a Specific Node Version](#install-global-packages-for-a-specific-node-version)
    - [List Global Packages for the Current Node Version](#list-global-packages-for-the-current-node-version)
    - [Install Local Packages for a Specific Node Version](#install-local-packages-for-a-specific-node-version)
6. [Aliases and Version Management](#aliases-and-version-management)
    - [Set Default Node Version](#set-default-node-version)
    - [Delete an Alias](#delete-an-alias)
    - [Check Node Executable Path](#check-node-executable-path)
7. [Additional NVM Features](#additional-nvm-features)
    - [Reinstall Global Packages](#reinstall-global-packages)
    - [Migrate Global Packages](#migrate-global-packages)
    - [Deactivate the Current Node Version](#deactivate-the-current-node-version)
    - [Update NVM](#update-nvm)
8. [Examples of Common Commands](#examples-of-common-commands)
9. [Notes](#notes)

---

## Installation

To install NVM, follow the instructions in the official [NVM repository](https://github.com/nvm-sh/nvm#install--update-script).

---

## Basic NVM Commands

### Check Node Version
```bash
node -v || node --version
```
Displays the current version of Node.js installed.

### List Locally Installed Versions of Node
```bash
nvm ls
```
Shows all the versions of Node.js installed on your machine.

### List Remote Available Versions of Node
```bash
nvm ls-remote
```
Displays all the Node.js versions available for installation.

### Install a Specific Version of Node
```bash
nvm install <version>
```
Installs the specified Node.js version. For example:
```bash
nvm install 18.16.1
```

### Install Latest LTS (Long Term Support) Version of Node
```bash
nvm install --lts
```
Installs the latest LTS version of Node.js.

### Install Latest Stable Version of Node
```bash
nvm install stable
```
Installs the latest stable version of Node.js.

### Switch Node Version
```bash
nvm use <version>
```
Switches to the specified version of Node.js. For example:
```bash
nvm use 20.5.1
```

### Set Default Version of Node
```bash
nvm alias default <version>
```
Sets a default version of Node.js to be used in new terminals. For example:
```bash
nvm alias default 18.16.1
```

---

## Additional NVM Commands

### Run a Node.js Script with a Specific Version
```bash
nvm run <version> <script.js>
```
Runs a Node.js script with the specified version of Node.js. For example:
```bash
nvm run 6.10.3 app.js
```

### Execute a Command with a Specific Node Version
```bash
nvm exec <version> <command>
```
Executes a command using the specified version of Node.js. For example:
```bash
nvm exec 4.8.3 node app.js
```

### Set Alias for a Node Version
```bash
nvm alias <alias_name> <version>
```
Creates an alias for a Node.js version. For example:
```bash
nvm alias default 8.1.0
```

### Use the Latest Version of Node
```bash
nvm use node
```
Switches to the latest version of Node.js.

### Use the Latest LTS Version of Node
```bash
nvm use --lts
```
Switches to the latest LTS version of Node.js.

---

## Managing Node Versions

### Uninstall a Specific Node Version
```bash
nvm uninstall <version>
```
Uninstalls the specified version of Node.js. For example:
```bash
nvm uninstall 6.9.2
```

### Uninstall the Latest LTS Version
```bash
nvm uninstall --lts
```
Removes the latest LTS version of Node.js.

### Uninstall NVM
To remove or uninstall NVM, delete the `$NVM_DIR` folder (usually located at `~/.nvm`).

---

## Working with Packages

### Install Global Packages for a Specific Node Version
```bash
nvm exec <version> npm install -g <package>
```
Installs a package globally for a specific Node.js version.

### List Global Packages for the Current Node Version
```bash
nvm exec current npm list -g --depth=0
```
Lists all global packages for the currently active Node.js version.

### Install Local Packages for a Specific Node Version
```bash
nvm use <version>
npm install <package>
```
Installs a package locally for the specific Node.js version.

---

## Aliases and Version Management

### Set Default Node Version
```bash
nvm alias default <version>
```
Sets the default Node.js version for new terminals.

### Delete an Alias
```bash
nvm unalias <alias_name>
```
Removes the specified alias.

### Check Node Executable Path
```bash
nvm which <version>
```
Displays the path to the Node.js executable for the specified version.

---

## Additional NVM Features

### Reinstall Global Packages
```bash
nvm reinstall-packages <version>
```
Reinstalls global packages from the current version to another version.

### Migrate Global Packages
```bash
nvm migrate <version>
```
Migrates global packages from one version of Node.js to another.

### Deactivate the Current Node Version
```bash
nvm deactivate
```
Deactivates the currently active Node.js version.

### Update NVM
```bash
nvm upgrade
```
Updates NVM to the latest version.

---

## Examples of Common Commands

### Install a Specific Version of Node.js
```bash
nvm install 8.0.0
```

### Use a Specific Version of Node.js
```bash
nvm use 8.0
```

### Run a Script with a Specific Version of Node.js
```bash
nvm run 6.10.3 app.js
```

### Execute a Command with a Specific Version of Node.js
```bash
nvm exec 4.8.3 node app.js
```

### Set an Alias for a Node Version
```bash
nvm alias default 8.1.0
```

### Use the Latest LTS Version of Node.js
```bash
nvm use --lts
```

---

## Notes:
- To completely uninstall NVM, delete the `$NVM_DIR` folder (typically located in `~/.nvm`).
- Always check the Node.js version you're using by running:
  ```bash
  node -v
  ```

---

Compiled all the essential commands in one place to make NVM usage simple and efficient. Happy coding!