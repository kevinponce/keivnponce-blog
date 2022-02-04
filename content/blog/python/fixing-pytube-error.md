---
title: Fixing pytube error ^\w+\W
date: "2021-05-21T22:12:00.121Z"
tags: ["python"]
header: { type: 'icon', bgColor: '#4B8BBE', icon: 'python' }
description: Fixing pytube error ^\w+\W
---

Fixing error in pytube:
```
pytube.exceptions.RegexMatchError: __init__: could not find match for ^\w+\W
```

```
/Users/<USERNAME>/.asdf/installs/python/3.10.1/lib/python3.10/site-packages/pytube/cipher.py
```

Change line from:
```
var_regex = re.compile(r"^\w+\W")
```

to:
```
var_regex = re.compile(r"^\$*\w+\W")
```
