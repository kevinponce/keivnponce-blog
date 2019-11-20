---
title: MacBook setup ASDF VM
date: "2019-11-11T20:12:00.121Z"
tags: ["swift"]
header: { type: 'icon', bgColor: '#F61653', icon: 'apple' }
description: Setup and use ASDF vm on a macbook. ASDF vm is a extendable version manager that mangages versions ofruby, python, golang, erlang, elixir, and more.
author: Kevin Ponce
---

I have been using rvm, nvm, and pyenv for so long. It has always annoys me that I had to use different version managers.

I recently had to set up my laptop and wanted to use a bash script to do so. I created one for Soothe when I was working there, but never created one for my personal computer. So I did a quick google search and stumbled upon thoughtbot's laptop repo. As I was looking through their bash script, I noticed asdf. After doing a quick search, I fell in love.

Asdf is a version manager for all!

First you need to install the desired plugin.
```
asdf plugin-add <name>

# examples:
asdf plugin-add clojure https://github.com/vic/asdf-clojure.git
asdf plugin-add elixir https://github.com/asdf-vm/asdf-elixir.git
asdf plugin-add erlang https://github.com/asdf-vm/asdf-erlang.git
asdf plugin-add golang https://github.com/kennyp/asdf-golang.git
asdf plugin-add python https://github.com/tuvistavie/asdf-python.git
asdf plugin-add ruby https://github.com/asdf-vm/asdf-ruby.git
```

Once you have the plugin installed you need to install a version:
```
asdf install <language> <versio>

# example
asdf instsall ruby 2.6.0
```

If you do not know which version to install, you can list all of the versions for the language:
```
asdf list-all
```

To use it in the active terminal screen:
```
asdf local ruby 2.6.0
```

To use it in all terminal screens:
```
asdf global ruby 2.6.0
```

If you are wondering what asdf is current, the a command for that:
```
asdf current
```


