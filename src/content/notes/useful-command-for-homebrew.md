---
title: "Useful command for Homebrew"
updated: "2026-03-27"
---

## See installed packages

List installed packages:

```
brew list # formulae and casks
brew list --formulae # just formulae
brew list --casks # just casks
```

List installed packages which are not dependencies of any others:

```
brew leaves
brew leaves -r # installed manually
brew leaves -p # installed as dependencies
```

List installed packages which are not dependencies of manually installed packages:

```
brew autoremove --dry-run
```

## See dependency tree

Show dependencies of the wget formula in a tree format:

```
brew deps --tree wget
```

Show all installed formulae in a dependency tree format:

```
brew deps --tree --installed
brew deps --tree $(brew leaves) # remove duplicate showing of same dependency
```

Show dependency tree for all casks:

```
brew deps --tree $(brew list --casks -1)
```

## Remove hanging dependencies

Uninstall hanging (no longer used) dependencies:

```
brew autoremove 
```

## References
- [Useful Commands for Package Management in Homebrew](https://gist.github.com/jamesmurdza/6e5f86bae7d3b3db4201a52045a5e477)

## See also
- [[§ Computing]]
