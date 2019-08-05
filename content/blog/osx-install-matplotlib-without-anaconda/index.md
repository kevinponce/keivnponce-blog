---
title: OSX install matplotlib without anaconda
date: "2019-08-03T22:12:00.121Z"
tags: ["Python"]
header: { type: 'icon', bgColor: '#4B8BBE', icon: 'python' }
---

If you ever tried to install matplotlib without using anaconda, then you probably pulled out some hair.
After destroying my python environment several times, I finally figured it out.
This solution only works for Mac, so sorry Linux and Windows users.

I recommend using pipenv to manage python version, because downloading python from brew was a pain in the ass when you need more than one version of python.
I needed to use python 3.6, because at the time tensorflow did not support python 3.7.

##First update brew and install pyenv pipenv

```
$ brew update
$ brew install pyenv pipenv
```

##Create project directory

```
$ mkdir ~/project
$ cd ~/project
$ pyenv init
```

##Install desired python version.
```
$ PYTHON_CONFIGURE_OPTS=\"--enable-framework\" CFLAGS=\"-I$(brew --prefix openssl)/include\" LDFLAGS=\"-L$(brew --prefix openssl)/lib\" pyenv install 3.6.5
```

##Access installed version of python
```python
$ pyenv local 3.6.5
$ pipenv shell
$ python --version
```

##Install dependencies
```
$ pip3 install numpy
$ pip3 install matplotlib
```
##Create file example.py and add the following in it:
```
import numpy as np
import matplotlib.pyplot as plt

x_data = np.linspace(0, 10, 10) + np.random.uniform(-1.5, 1.5, 10)
y_data = np.linspace(0, 10, 10) + np.random.uniform(-1.5, 1.5, 10)
plt.plot(x_data, y_data)
plt.show()
```

##Run script
```
$ python3 example.py
```

Voila.