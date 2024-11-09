---
author: spnarkhede
authorTitle: DevOps Engineer
authorURL: https://github.com/spnarkhede
authorImageURL: https://github.com/spnarkhede
tags: [Strategic, Mindset, Book, Learnings]
--- 

## 1. Git Configuration

### Basic Configuration

Git needs basic configuration to work effectively. The most common settings are the user name and email, which Git uses to label commits.

```bash
# Set your name
git config --global user.name "Your Name"

# Set your email
git config --global user.email "your.email@example.com" 
```
```bash
git config --global user.name "spnarkhede"
git config --global user.email shubhampnarkhede@gmail.com
git config --global core.autocrlf false
git config --global core.editor vim
git config --global credential.helper store
git config --global color.ui true
```
```bash
git config --global init.defaultBranch main
git config --global push.default simple
git config --global merge.conflictstyle diff3
git config --global pull.rebase true
git config --global rebase.autoStash true
```
```bash
git config --global alias.s "status"
git config --global alias.c "commit --verbose"
git config --global alias.a "add"
git config --global alias.rs "restore --staged"
git config --global alias.st "stash"
git config --global alias.pr "pull --rebase"
git config --global alias.rpo "remote prune origin"
```
```bash
git config --global commit.template $HOME/.gitmsg.md
git config --global commit.gpgsign true
git config --global gpg.program gpg
git config --global user.signingkey <pub-keyID>
```
```bash
# after 1s, git auto correct wrong command
git config --global help.autocorrect 10
```

### Proxy Configuration

If you're behind a proxy, you can configure Git to use it:

```bash
# Set HTTP proxy
git config --global http.proxy http://proxy.example.com:8080

# Set HTTPS proxy
git config --global https.proxy https://proxy.example.com:8080

# Remove proxy
git config --global --unset http.proxy
git config --global --unset https.proxy
``` 

```bash
# GitHub proxy.
git config --global url."https:/hub.fastgit.org/".insteadOf "https://github.com/"

# Socks5 proxy.
git config --global http.proxy 'socks5://127.0.0.1:1080'
git config --global https.proxy 'socks5://127.0.0.1:1080'

# Post buffer configuration.
git config --global http.postbuffer 524288000
git config --global https.postbuffer 1048576000
```

### List and Help

You can list all the Git configurations with:

```bash
git config --list
```

For help with any Git command:

```bash
git help <command>
``` 

```bash
git config --list
git --help
man git-
git help
git help config
``` 

### Git Ignore File

A `.gitignore` file tells Git which files or directories to ignore in a project.

**Example `.gitignore` for a Node.js project:**

```
node_modules/
.DS_Store
.env
```

Add `.gitignore` to your repository:

```bash
git add .gitignore
git commit -m "Add .gitignore"
```

![GitHub Cheat Sheet](./figures/gitcheatsheet.png 'GitHub Cheat Sheet')

## 2. Git Operations

### Add

Adds changes to the staging area before committing:

```bash
git add <file>
git add .
```

### Remove

Removes files from the working directory and the index:

```bash
git rm <file>
```

### Move

Moves or renames a file:

```bash
git mv <old-name> <new-name>
```

### Clean

Cleans up untracked files in your working directory:

```bash
git clean -fd
```

### Commit

Commits the staged changes:

```bash
git commit -m "Your commit message"
```

### Commit Style Guide

Follow these guidelines for commit messages:

1. Use the imperative mood ("Fix bug", not "Fixed bug").
2. Be concise yet descriptive.
3. Keep lines under 72 characters.
4. Capitalize the first letter of the message.

### Git Commit Tool

Use the interactive commit tool:

```bash
git commit --amend
```

### Git Commit Emoji

Use emojis for clearer commit messages. Some common examples:

- :bug: for bug fixes
- :sparkles: for new features
- :memo: for documentation updates

To enable Git commit emojis, you can use a tool like [gitmoji-cli](https://github.com/carloscuesta/gitmoji-cli).

### Stash

Temporarily saves changes without committing:

```bash
git stash
git stash pop
```

### Revert

Reverts a commit by creating a new commit that undoes the changes:

```bash
git revert <commit-id>
```

### Reset

Resets your working directory and staging area to a previous state:

```bash
git reset --hard <commit-id>
```

### Log

Shows the commit history:

```bash
git log
```

### Pretty Format

You can format the log output:

```bash
git log --oneline
git log --graph --oneline --decorate --all
```

### Log Options

You can filter the log output:

```bash
git log --since="2 weeks ago"
git log --author="John Doe"
```

### Log Filter

To show logs for specific files:

```bash
git log <file-name>
```

### Reflog

Shows the history of the HEAD and updates:

```bash
git reflog
```

### Show

Shows the content of a commit or branch:

```bash
git show <commit-id>
```

### Alias

Create shortcuts for Git commands:

```bash
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
```

## 3. Remote Operations

### Remote

Add a remote repository:

```bash
git remote add origin https://github.com/username/repository.git
```

### Pull

Fetch and merge changes from the remote repository:

```bash
git pull origin main
```

### Fetch

Fetch updates from the remote without merging:

```bash
git fetch origin
```

### Merge

Merge changes from one branch into another:

```bash
git merge <branch-name>
```

### Rebase

Rebase your branch onto another:

```bash
git rebase <branch-name>
```

### Push

Push local commits to the remote repository:

```bash
git push origin <branch-name>
```

## 4. Branching

### Basic Branch Workflow

1. Create a new branch:
   ```bash
   git branch <branch-name>
   ```

2. Switch to the branch:
   ```bash
   git checkout <branch-name>
   ```

3. Merge the branch:
   ```bash
   git merge <branch-name>
   ```

4. Delete the branch after merging:
   ```bash
   git branch -d <branch-name>
   ```

### Advanced Branch Workflow

1. Create and switch to a new branch in one step:
   ```bash
   git checkout -b <branch-name>
   ```

2. Rebase a branch onto another:
   ```bash
   git rebase <base-branch>
   ```

### Tag

Tags are useful for marking specific commits:

```bash
git tag v1.0.0
git push origin v1.0.0
```

## 5. Submodule

Git submodules are repositories inside another repository:

```bash
git submodule add <repository-url> <path-to-submodule>
git submodule update --init --recursive
```

## 6. Diff and Patch

### Diff

Shows the difference between changes:

```bash
git diff
```

### Patch

Generates a patch from the diff:

```bash
git diff > patch.diff
```

## 7. Bisect

Used to find the commit that introduced a bug:

```bash
git bisect start
git bisect bad
git bisect good <commit-id>
```

## 8. Reverse List

Reverses the order of commits in a log:

```bash
git log --reverse
```

## 9. Filter Branch

Used to rewrite the history of a repository:

```bash
git filter-branch --tree-filter 'rm -f <file>' -- <branch-name>
```

## 10. Cherry Pick

Applies the changes from a specific commit to the current branch:

```bash
git cherry-pick <commit-id>
```

## 11. GitHub

### GPG Usage

Sign commits with GPG for added security:

```bash
git commit -S -m "Signed commit"
```

### LICENSE

GitHub supports various licenses. A common license is MIT, which you can add by creating a `LICENSE` file in the root of your repository.

### Teamwork

GitHub makes it easy to collaborate on projects. You can create teams, set permissions, and manage pull requests.

## 12. GitHub CLI Tool

The GitHub CLI allows you to manage GitHub repositories from the command line:

```bash
gh repo create
gh pr create
gh issue create
```

## 13. GitHub Wiki

You can enable a wiki in a GitHub repository to document your project. Access it via the "Wiki" tab on your repository's GitHub page.

## 14. Shorten GitHub URL

Use [GitHub Shortener](https://git.io/) to shorten URLs.

## 15. GitHub Flavored Markdown

GitHub uses a slightly different flavor of Markdown. For more details, refer to [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

## 16. GitHub Pages

GitHub Pages allows you to host static websites directly from your GitHub repository.

## 17. GitHub Git Attributes

Define how Git should treat files with `.gitattributes`.

```bash
*.jpg binary
```

## 18. GitHub Actions

Automate your workflow using GitHub Actions. Set up CI/CD pipelines.

## 19. GitHub Dependabot

GitHub Dependabot automatically keeps your dependencies up-to-date by submitting pull requests for outdated dependencies.

## 20. GitHub Copilot

GitHub Copilot assists with code completion and suggestions inside your editor.

## 21. Git Internals

### Git Objects

Git stores data as objects. The main objects are:

- **Commit**: A snapshot of the project at a point in time.
- **Tree**: A directory of files.
- **Blob**: A file's contents.
- **Tag**: A reference to a commit.

### Git Packfiles

Git uses packfiles to store objects efficiently, allowing the repository to grow without consuming excessive space.

## 22. Git Inside Commands

These commands reflect the internal workings of Git:

### Add Inside

```bash
git add <file-name>
```

### Commit Inside

```bash
git commit -m "Commit message"
```

### Checkout Inside

```bash
git checkout <branch-name>
```

### Merge Inside

```bash
git merge <branch-name>
```

### Fetch Inside

```bash
git fetch <remote>
```

### Clone Inside

```bash
git clone <repository-url>
```

### Push Inside

```bash
git push <remote> <branch-name>
```

### Branch Inside

```bash

```

# Git Resources

Here are some helpful resources to understand and work with Git:
- [Git repository](https://github.com/)
- [Explain Git with D3](https://onlywei.github.io/explain-git-with-d3) - A visual guide to understand Git concepts with interactive D3.js graphics.
- [Visual Git Guide](https://marklodato.github.io/visual-git-guide/index-en.html) - A visual guide to common Git commands and workflows.
- [Oh My Git!](https://ohmygit.org/) - An interactive Git game that helps you learn Git commands.
- [Learn Git Branching](https://learngitbranching.js.org/) - An interactive platform to master Git branching.
- [Git and GitHub Learning Resources](https://docs.github.com/en/get-started/start-your-journey/git-and-github-learning-resources) - Official GitHub documentation and tutorials to help you get started with Git and GitHub.
