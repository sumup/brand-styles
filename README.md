# SumUp Brand Styles

> A Sass library for styles of the SumUp brand

## Linting

We use [stylelint](http://stylelint.io) with the  [stylelint-config-recommended](https://github.com/stylelint/stylelint-config-recommended) preset to lint our SCSS.

### From the terminal

The Website has one linting task, with an additional watch mode:

- `lint`: runs stylelint on `**/*.scss`.
- `lint:watch` runs the above lint task in watch mode. Only changed files are linted.

### Fixing

There is an additional npm tasks for fixing code.

```bash
❯ npm run fix
```

### In your editor

While we do have watch tasks that continuously lint code you change, having linter integration with your text editor is very helpful and helps keeping the number of tasks to run while developing to a minimum.

#### Atom

Setting up linting in Atom is straight forward. Just install [linter](https://atom.io/packages/linter), [linter-ui-default](https://atom.io/packages/linter-ui-default), and  [linter-stylelint](https://atom.io/packages/linter-stylelint) to see errors reported by Stylelint.

#### Vim and Neovim

Historically, [syntastic](https://github.com/scrooloose/syntastic/) has been the go-to solution for running linters in Vim. With the appearance of Neovim and Vim 8 job control, asynchronous linting and build running plugins have surfaced. They have the advantage of not blocking the Vim's main thread while running the linter. The latest and greatest linting engine available is **[Ale](https://github.com/w0rp/ale)**. It supports all kinds of programming languages, has taken a lot of inspiration from more "modern" editors' approaches. Ale also supports all modern JavaScript linters and has a fix command that allows you to fix the current buffer's code using prettier and/or ESLint (automatically on save, if you want). As with any Vim plugin, check the docs for details on how to set it up. Here is [@felixjung](https://github.com/felixjung)'s [config](https://github.com/felixjung/dotfiles/blob/master/neovim/nvim/config/ale.vim):

```vim
" Always keep column for Ale signs in gutter.
let g:signcolumns = 'yes'
let g:ale_sign_column_always = 1

" Configure linters for different languages.
" TODO: find out how to only run linters, if they are configured for the
" project.
let g:ale_linters = {
\  'javascript': ['eslint']
\}

" Using some cool nerd font icons here.
let s:warning_icon = ''
let s:error_icon = ''
let s:info_icon = ''

" Custom Ale signs using nerd-fonts.
let g:ale_sign_error = s:error_icon
let g:ale_sign_warning = s:warning_icon
let g:ale_sign_info = s:info_icon

" Statusline format
" TODO: use nerdfont symbols here (same as for sign column).
let g:ale_statusline_format = [s:error_icon . ' %d', s:warning_icon . ' %d', '']

" Show error/warning for current cursor line below status line.
let g:ale_echo_cursor = 0 " Disabled. It's too expensive.
let g:ale_echo_msg_error_str = s:error_icon
let g:ale_echo_msg_warning_str = s:warning_icon
let g:ale_echo_msg_format = '[%linter%] %s %severity%'

" Fixers that should be used to automatically fix linting errors.
" TODO: check how to put prettier in here, if the project uses it.
" let g:ale_fixers = {

" \}

" Quickfix window height.
let g:ale_list_window_size = 15

" Don't always lint. It causes bad performance.
let g:ale_lint_on_text_changed = 'never'
let g:ale_lint_on_insert_leave = 1
```
