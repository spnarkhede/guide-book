---
author: spnarkhede
authorTitle: DevOps Engineer
authorURL: https://github.com/spnarkhede
authorImageURL: https://github.com/spnarkhede
tags: [Strategic, Mindset, Book, Learnings]
--- 

# Vim Basic Notes
Setting up Vim typically involves installing Vim on your system and configuring it for personal use. This includes installing Vim, configuring global settings, and customizing the editor for optimal use.

---

### **Vim Installation**
To install Vim, you can use the package manager for your operating system:

#### **Linux** (Ubuntu/Debian):
```bash
sudo apt update
sudo apt install vim
```

#### **macOS** (Homebrew):
```bash
brew install vim
```

#### **Windows**:
You can download the installer from [Vim's website](https://www.vim.org/download.php).

---

### **Vim Configuration**
Vim configuration is handled through the `.vimrc` file, where you can set your preferences.

#### **Example `.vimrc` settings:**
```vim
set number         " Show line numbers
set relativenumber " Relative line numbers
set tabstop=4      " Set tab width to 4 spaces
set shiftwidth=4   " Set indentation width to 4 spaces
set expandtab      " Use spaces instead of tabs
syntax enable      " Enable syntax highlighting
```

---

### **Normal Mode Commands**
In Vim, Normal Mode is the default mode where you can navigate, delete, copy, paste, and perform various operations. 

#### **Basic Navigation:**
- `h` - Move left
- `j` - Move down
- `k` - Move up
- `l` - Move right

#### **Other Commands:**
- `dd` - Delete the current line
- `yy` - Yank (copy) the current line
- `p` - Paste after the cursor
- `u` - Undo the last change
- `Ctrl + r` - Redo the last undone change

---

### **Repeat Command**
You can repeat the last action in Normal Mode by pressing `.`. For example, after deleting a line with `dd`, pressing `.` will delete the next line.

---

### **Undo Command**
Undo in Vim is done using the `u` key, and you can undo multiple changes by pressing `u` repeatedly.

#### **Redo Command:**
To redo a change, use `Ctrl + r`.

---

### **Compound Command**
Compound commands are multiple commands combined together using the `;` separator. For example:
```vim
dd;yy;pp
```
This will delete the line, copy a line, and then paste the copied line.

---

### **Edit Command**
Vim provides powerful editing commands such as:
- `i` - Insert before the cursor
- `a` - Insert after the cursor
- `x` - Delete the character under the cursor
- `r` - Replace the character under the cursor

---

### **Insert Mode Commands**
Insert Mode allows you to type and modify text. To enter Insert Mode:
- Press `i` to insert before the cursor.
- Press `a` to insert after the cursor.

---

### **Mode Switching**
You can switch between modes in Vim:
- **Normal Mode** (default) - For navigation and manipulation of text.
- **Insert Mode** - For text input.
- **Visual Mode** - For selecting text.
- **Command Line Mode** - For commands like save and quit.

Switch to different modes:
- `i` - Switch to Insert Mode
- `Esc` - Switch to Normal Mode
- `v` - Switch to Visual Mode
- `:` - Switch to Command Line Mode

---

### **Insert**
To enter Insert Mode, press `i`. To return to Normal Mode, press `Esc`.

---

### **Delete**
- `d` - Delete (followed by a motion command, such as `d$` to delete from the cursor to the end of the line).
- `dd` - Delete the current line.

---

### **Paste**
To paste text:
- `p` - Paste after the cursor.
- `P` - Paste before the cursor.

---

### **Visual Mode**
Visual Mode is for selecting text to perform operations like delete, copy, or paste. To enter Visual Mode:
- Press `v` to select characters.
- Press `V` to select whole lines.
- Press `Ctrl + v` for block selection.

---

### **Command Line Mode**
In Command Line Mode, you can perform operations like saving files, quitting Vim, and other commands.

- `:w` - Save the file.
- `:q` - Quit Vim.
- `:wq` - Save and quit.
- `:x` - Save and quit (same as `:wq`).

---

### **Autocompletion**
Vim supports basic autocompletion:
- Press `Ctrl + n` or `Ctrl + p` in Insert Mode to complete the word.
- `:set complete=.,w,b,u` - Set autocompletion sources.

---

### **Range**
Ranges define a set of lines for a command. For example:
- `:1,5d` - Delete lines 1 to 5.
- `:.,$s/foo/bar/g` - Replace `foo` with `bar` from the current line to the end of the file.

---

### **Undo/Redo**
To undo a change, use `u`. To redo, use `Ctrl + r`.

---

### **Shell**
You can run shell commands from within Vim using the `:!` command.
For example:
- `:!ls` - List files in the current directory.
- `:!python3 script.py` - Run a Python script.

---

### **Range Replacement**
Range replacement allows you to replace text across a specific range of lines:
```vim
:2,10s/foo/bar/g
```
This replaces `foo` with `bar` in lines 2 to 10.

---

### **Global**
You can run a command globally using the `:g` command. For example, to delete all lines containing `foo`:
```vim
:g/foo/d
```

---

### **Files and Buffers**
- `:e filename` - Open a file.
- `:bnext` - Go to the next buffer.
- `:bprev` - Go to the previous buffer.

---

### **File Search**
- `:find filename` - Search for a file by name.
- `/pattern` - Search for a pattern in the file.
- `n` - Next match.
- `N` - Previous match.

---

### **Buffers**
A buffer is a file loaded into memory. You can manage buffers with:
- `:b 1` - Switch to buffer 1.
- `:ls` - List all buffers.
- `:bd` - Delete the current buffer.

---

### **Save File**
- `:w` - Save the file.

---

### **Window**
Vim allows for multiple windows (split views). You can split your window with:
- `:split` or `:sp` - Horizontal split.
- `:vsplit` or `:vs` - Vertical split.

---

### **Tabs**
Tabs allow for multiple files to be open within the same Vim session:
- `:tabnew` - Open a new tab.
- `:tabn` - Go to the next tab.
- `:tabp` - Go to the previous tab.

---

### **File Manager**
The built-in file manager in Vim can be accessed with:
- `:Explore` - Open the file manager.
- `:Vex` - Open the file explorer in a vertical split.

---

### **Macro**
Vim allows you to record and replay macros:
- `q` followed by a register name (e.g., `qa`) to start recording.
- Perform the commands.
- Press `q` again to stop recording.
- To replay the macro, press `@a`.

---

### **Tools**
Vim supports many tools and plugins for enhanced functionality. Some tools include:
- **Vundle** for plugin management.
- **YouCompleteMe** for autocompletion.
- **ctags** for code navigation.

---

### **Vundle**
Vundle is a plugin manager for Vim. Install it by cloning the repository:
```bash
git clone https://github.com/VundleVim/Vundle.vim.git ~/.vim/bundle/Vundle.vim
```
In `.vimrc`, add:
```vim
set nocompatible
filetype off
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()
Plugin 'VundleVim/Vundle.vim'
call vundle#end()
```

---

### **Color Schemes**
Vim supports color schemes. You can change the color scheme using:
```vim
:colorscheme desert
```

---

### **YouCompleteMe**
YouCompleteMe is a code completion plugin for Vim. To install:
```bash
git clone https://github.com/ycm-core/YouCompleteMe.git ~/.vim/bundle/YouCompleteMe
```

---

### **ctags**
`ctags` generates an index file to navigate code more efficiently:
```bash
ctags -R .
```

---

### **make**
You can run `make` commands from within Vim:
```vim
:!make
```

---

### **Built-in Autocompletion**
Vim has built-in autocompletion features. You can trigger it in Insert Mode with:
- `Ctrl + n` for next match
- `Ctrl + p` for previous match

---

### **Git**
Vim can integrate with Git using plugins like `fugitive.vim` to manage repositories, commit, and see changes.

---

### **Documentation**
Access Vim documentation by typing `:help`.

---

### **Error**
Vim will show errors in the command line. Use `

:cnext` to navigate through errors.

---

### **Swap Backup File**
Vim automatically creates swap files for backup. To view swap files:
```bash
ls -a ~/.vim/swap
```

---

### **Error Encoding**
Vim may encounter encoding issues; use `:set encoding=utf-8` to set the encoding.

---

### **VSCode Vim**
VSCode Vim is a Vim extension for Visual Studio Code that allows you to use Vim keybindings within VSCode.

---

### **Easy Motion**
Easy Motion is a Vim plugin that enhances navigation by providing a quick way to move the cursor. Install with:
```bash
git clone https://github.com/easymotion/vim-easymotion.git ~/.vim/bundle/vim-easymotion
```

---

### **NeoVim**
NeoVim is a refactor of Vim with improved features and extensibility. Install it via package managers like `apt` or `brew`.

---

### **NeoVim Language Server**
NeoVim supports language servers for autocompletion and syntax checking using `nvim-lspconfig`.

---

### **NeoVim TreeSitter**
TreeSitter provides better syntax highlighting and parsing in NeoVim.

---

### **NvChad Key Mapping**
NvChad is a configuration for NeoVim with custom key mappings for efficiency. To modify key mappings, edit the `keymappings.lua` file.

---

### **NvChad Configuration**
NvChad can be configured through Lua files, where you can define your custom settings, key mappings, and plugins.

---

These notes provide a detailed overview of Vim's basic functionalities and commands. Each topic is explained with relevant commands and configurations for effective use of Vim.