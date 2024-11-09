Here's a comprehensive Vim cheat sheet, summarizing key commands for efficient navigation, editing, and file management:

### Global Commands
- `:h[elp] keyword` - Open help for a keyword
- `:sav[eas] file` - Save file as
- `:clo[se]` - Close current pane
- `:ter[minal]` - Open terminal window
- `K` - Open man page for word under the cursor

### Cursor Movement
- `h` - Move cursor left
- `j` - Move cursor down
- `k` - Move cursor up
- `l` - Move cursor right
- `gj` - Move cursor down (multi-line text)
- `gk` - Move cursor up (multi-line text)
- `H` - Move to top of screen
- `M` - Move to middle of screen
- `L` - Move to bottom of screen
- `w` - Jump forward to start of word
- `e` - Jump forward to the end of word
- `b` - Jump backward to start of word
- `%` - Move cursor to matching character (e.g., parentheses)
- `0` - Jump to start of line
- `$` - Jump to end of line
- `gg` - Go to first line of document
- `G` - Go to last line of document
- `fx` - Jump to next occurrence of character `x`
- `tx` - Jump to before next occurrence of character `x`
- `;` - Repeat previous `f`, `t`, `F`, `T` movement

### Insert Mode
- `i` - Insert before cursor
- `I` - Insert at the beginning of line
- `a` - Insert (append) after cursor
- `A` - Insert (append) at end of line
- `o` - Open a new line below
- `O` - Open a new line above
- `Ctrl + h` - Delete char before cursor
- `Esc` or `Ctrl + c` - Exit insert mode

### Editing
- `r` - Replace a character
- `J` - Join the line below with a space
- `gJ` - Join the line below without space
- `cc` - Change (replace) entire line
- `ciw` - Change (replace) entire word
- `u` - Undo
- `Ctrl + r` - Redo
- `.` - Repeat last command

### Visual Mode
- `v` - Start visual mode
- `V` - Start linewise visual mode
- `Ctrl + v` - Start visual block mode
- `y` - Yank (copy) marked text
- `d` - Delete marked text
- `~` - Switch case of marked text
- `u` - Convert marked text to lowercase
- `U` - Convert marked text to uppercase

### Registers
- `:reg` - Show registers content
- `"xy` - Yank into register `x`
- `"xp` - Paste from register `x`
- `"+y` - Yank into system clipboard
- `"+p` - Paste from system clipboard

### Marks and Positions
- `:marks` - List marks
- `ma` - Set current position for mark `A`
- `` `a `` - Jump to position of mark `A`
- `Ctrl + i` - Go to newer position in jump list
- `Ctrl + o` - Go to older position in jump list

### Macros
- `qa` - Record macro `a`
- `q` - Stop recording macro
- `@a` - Run macro `a`
- `@@` - Rerun last run macro

### Cut and Paste
- `yy` - Yank (copy) a line
- `2yy` - Yank (copy) 2 lines
- `dw` - Delete word
- `p` - Paste after cursor
- `P` - Paste before cursor
- `dd` - Delete (cut) a line

### Indent Text
- `>>` - Indent line right
- `<<` - Indent line left
- `>%` - Indent a block with `()` or `{}` (cursor on brace)
- `=%` - Re-indent a block with `()` or `{}`

### Exiting Vim
- `:w` - Save the file but don't exit
- `:wq` or `ZZ` - Save and quit
- `:q!` - Quit without saving
- `:wqa` - Save and quit on all tabs

### Search and Replace
- `/pattern` - Search for pattern
- `?pattern` - Search backward for pattern
- `:%s/old/new/g` - Replace all occurrences of `old` with `new`
- `:%s/old/new/gc` - Replace with confirmation for each

### Tabs and Buffers
- `:tabnew` - Open file in a new tab
- `gt` - Move to the next tab
- `gT` - Move to the previous tab
- `:e[dit] file` - Edit a file in a new buffer
- `:bn[ext]` - Go to the next buffer
- `:bd[elete]` - Delete a buffer (close a file)

### Working with Multiple Files
- `:sp[lit] file` - Open file in a new split window
- `:vs[plit] file` - Open file in a new vertical split window
- `Ctrl + ws` - Split window horizontally
- `Ctrl + wv` - Split window vertically
- `Ctrl + wq` - Close current window

This cheat sheet covers the essentials for working with Vim. For more advanced usage, refer to the `:help` command in Vim itself.

Here’s a summary and clarification of the Vim commands you’ve listed, categorized by functionality:

### **Working with Multiple Files (Buffers and Windows)**

- **Buffers:**
  - `:e[dit] file` – Open a file in a new buffer.
  - `:bn[ext]` – Switch to the next buffer.
  - `:bp[revious]` – Switch to the previous buffer.
  - `:bd[elete]` – Close a buffer (delete from the buffer list).
  - `:b[uffer]#` – Switch to a buffer by its index number.
  - `:b[uffer] file` – Switch to a buffer by its file name.
  - `:ls` or `:buffers` – List all open buffers.

- **Splitting Windows:**
  - `:sp[lit] file` – Open a file in a new buffer and split the window horizontally.
  - `:vs[plit] file` – Open a file in a new buffer and split the window vertically.
  - `:vert[ical] ba[ll]` – Open all buffers in vertical windows.
  - `:tab ba[ll]` – Open all buffers as tabs.

- **Window Navigation (with Ctrl + w commands):**
  - `Ctrl + ws` – Split the window.
  - `Ctrl + wv` – Split the window vertically.
  - `Ctrl + ww` – Switch to the next window.
  - `Ctrl + wq` – Close the current window.
  - `Ctrl + wx` – Exchange the current window with the next one.
  - `Ctrl + w=` – Make all windows equal size.
  - `Ctrl + wh` – Move the cursor to the window to the left (horizontal split).
  - `Ctrl + wl` – Move the cursor to the window to the right (horizontal split).
  - `Ctrl + wj` – Move the cursor to the window below (vertical split).
  - `Ctrl + wk` – Move the cursor to the window above (vertical split).
  - `Ctrl + wH` – Make the current window full height at the far left.
  - `Ctrl + wL` – Make the current window full height at the far right.
  - `Ctrl + wJ` – Make the current window full width at the very bottom.
  - `Ctrl + wK` – Make the current window full width at the very top.

### **Folding Commands (for Code/Content Management)**

- **Folding (Hiding/Showing Code or Sections):**
  - `zf` – Manually define a fold up to a certain motion (e.g., `zf2j` to fold up to 2 lines down).
  - `zd` – Delete the fold under the cursor.
  - `za` – Toggle the fold under the cursor.
  - `zo` – Open the fold under the cursor.
  - `zc` – Close the fold under the cursor.
  - `zr` – Reduce (open) all folds by one level.
  - `zm` – Fold more (close) all folds by one level.
  - `zi` – Toggle the folding functionality.

  **Tip**: Uppercase letters (e.g., `zA`, `zR`) work on all levels of folding, not just the current one.

### **Diffing Files (Comparing Differences)**

- **Diff Commands:**
  - `]c` – Jump to the start of the next change in the diff.
  - `[c` – Jump to the start of the previous change in the diff.
  - `do` or `:diffg[et]` – Obtain the differences from another buffer/file.
  - `dp` or `:diffpu[t]` – Put the differences into the current buffer/file.
  - `:diffthis` – Make the current window part of the diff comparison.
  - `:diffupdate` – Update the diff view.
  - `:diffoff` – Disable diff mode for the current window.

**Tip**: To start Vim in diff mode directly, you can run `vimdiff` in a terminal. Additionally, Vim can be set as the default tool for Git diffs via `git difftool`.

Let me know if you need further clarification or examples on using these commands! 

**Reference**
- [https://vim.rtorr.com/](https://vim.rtorr.com/)