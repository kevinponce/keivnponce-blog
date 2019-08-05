---
title: How crop an image in python
date: "2019-08-03T22:12:00.121Z"
tags: ["Python"]
header: { type: 'icon', bgColor: '#4B8BBE', icon: 'python' }
---

Here is a snipet of code how to parse an image in pythond
```python
import cv2
import os
dir_path = os.path.dirname(os.path.realpath(__file__))
example = os.path.join(dir_path, \"example.jpeg\")

img = cv2.imread(example)

crop_img = img[77:100,45:100]
cv2.imshow(\"cropped\", crop_img)

cv2.waitKey(0)
cv2.destroyAllWindows()

#img[y:y+h, x:x+w]
front_top_center_img = img[67:87,45:63]
example_croped = os.path.join(example, \"example_croped.jpeg\")
cv2.imwrite(example_croped, example)
```