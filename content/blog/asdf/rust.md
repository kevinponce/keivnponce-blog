---
title: Using Rust on MacOS
date: "2022-02-16T20:12:00.121Z"
tags: ["rust", "mac"]
header: { type: 'icon', bgColor: '#F61653', icon: 'apple' }
description: How to install Rust on MacOS using asdf
author: Kevin Ponce
---

Run the following:
```
asdf plugin-add rust https://github.com/asdf-community/asdf-rust.git
RUST_WITHOUT=rust-docs,rust-other-component asdf install rust 1.51.0
asdf global rust 1.51.0
```
