---
title: Edge detection using python
date: "2021-01-28T22:12:00.121Z"
tags: ["python"]
header: { type: 'icon', bgColor: '#4B8BBE', icon: 'python' }
description: How to do edge detection using python.
---

Here is a simple snippet of code that allows you do edge detection in python.

Before you can use it, make sure you install scikit-image, scipy and opencv-python.
```
$ pip install scikit-image
$ pip install scipy
$ pip install opencv-python
```

```python
import cv2
import numpy as np
import matplotlib.pyplot as plt
from scipy import ndimage as ndi
from skimage import feature

im = cv2.imread('soloCup.jpeg')
im = cv2.cvtColor(im, cv2.COLOR_BGR2GRAY)

# Compute the Canny filter for two values of sigma
edges1 = feature.canny(im)
edges2 = feature.canny(im, sigma=3)

# display results
fig, (ax1, ax2, ax3) = plt.subplots(nrows=1, ncols=3, figsize=(8, 3), sharex=True, sharey=True)
ax1.imshow(im, cmap=plt.cm.gray)
ax1.axis('off')
ax1.set_title('noisy image', fontsize=20)

ax2.imshow(edges1, cmap=plt.cm.gray)
ax2.axis('off')
ax2.set_title(r'Canny filter, $\sigma=1$', fontsize=20)

ax3.imshow(edges2, cmap=plt.cm.gray)
ax3.axis('off')
ax3.set_title(r'Canny filter, $\sigma=3$', fontsize=20)

fig.tight_layout()
plt.show()
```
