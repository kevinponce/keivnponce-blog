---
title: Python http
date: "2020-11-26T22:12:00.121Z"
tags: ["python"]
header: { type: 'icon', bgColor: '#4B8BBE', icon: 'python' }
description: How to do a simple http request in Python.
---
How to do a simple http request in Python.

Warning do not name file http.py, because it will break everything...

# Install pydub
```
pip install urllib3
```

```python
# python -m pip install urllib3
import urllib3

http = urllib3.PoolManager()
r = http.request('GET', 'http://httpbin.org/robots.txt')
print(r.status)
print(r.data)
```
