---
title: Tensorflow image recognition on mac
date: "2019-08-03T22:12:00.121Z"
tags: ["python"]
header: { type: 'icon', bgColor: '#4B8BBE', icon: 'python' }
---

Here is a simple tutorial on getting tensorflow zoo models image recognition.

###Install Tensorflow
I had a hard time setting up tensorflow-gpu.
If you are using a mac, I would recomend using tensorflow cpu instead.

```
$ pip3 install tensorflow
```

###Install Protobuf
```
$ brew install protobuf
```

###Set up tensorflow models
```
$ cd ~/
$ mkdir tensorflow-models
$ cd tensorflow-models/
$ git clone --recurse-submodules https://github.com/tensorflow/models.git
```

###Download zoo models
Go to: `https://github.com/tensorflow/models/blob/master/research/object_detection/g3doc/detection_model_zoo.md`
copy the link to ssd_mobilenet_v1_coco

```
$ curl link-from-about -O
$ tar -xzvf file-download-above
$ cd ~/tensorflow-modesl/models/research
$ protoc object_detection/protos/*.proto --python_out=.
```

###Add tensorflow models to PYTHONPATH
Since I am running python through pyenv, I will manually run the following command in the terminal instead of adding it to `~/.bashrc` file.

```
$ export PYTHONPATH=$PYTHONPATH:/Users/kevinponce/Programming/tensorflow-models/models/research:/Users/kevinponce/Programming/tensorflow-modelsmodels/research/slim
```

###Create image detection python script
```
$ cd ~/tensorflow-modeslmodels/research/object_detection/
$ touch play_object_detection.py
$ sudo vim play_object_detection.py
```

Save the following code to `play_object_detection.py`
```python
# Import packages
import os
import cv2
import numpy as np
import tensorflow as tf
import sys

# Set up camera constants
IM_WIDTH = 1280
IM_HEIGHT = 720

# This is needed since the working directory is the object_detection folder.
sys.path.append('..')

# Import utilites
from utils import label_map_util
from utils import visualization_utils as vis_util

# Name of the directory containing the object detection module we're using
MODEL_NAME = 'yawn/inference_graph'


# Grab path to current working directory
CWD_PATH = os.getcwd()

# Path to frozen detection graph .pb file, which contains the model that is used
# for object detection.
PATH_TO_CKPT = os.path.join(CWD_PATH,MODEL_NAME,'frozen_inference_graph.pb')

# Path to label map file
PATH_TO_LABELS = os.path.join(CWD_PATH,'yawn','train','labelmap.pbtxt')

# Number of classes the object detector can identify
NUM_CLASSES = 1

## Load the label map.
# Label maps map indices to category names, so that when the convolution
# network predicts `5`, we know that this corresponds to `airplane`.
# Here we use internal utility functions, but anything that returns a
# dictionary mapping integers to appropriate string labels would be fine
label_map = label_map_util.load_labelmap(PATH_TO_LABELS)
categories = label_map_util.convert_label_map_to_categories(label_map, max_num_classes=NUM_CLASSES, use_display_name=True)
category_index = label_map_util.create_category_index(categories)

# Load the Tensorflow model into memory.
detection_graph = tf.Graph()
with detection_graph.as_default():
    od_graph_def = tf.GraphDef()
    with tf.gfile.GFile(PATH_TO_CKPT, 'rb') as fid:
        serialized_graph = fid.read()
        od_graph_def.ParseFromString(serialized_graph)
        tf.import_graph_def(od_graph_def, name='')

    sess = tf.Session(graph=detection_graph)


# Define input and output tensors (i.e. data) for the object detection classifier

# Input tensor is the image
image_tensor = detection_graph.get_tensor_by_name('image_tensor:0')

# Output tensors are the detection boxes, scores, and classes
# Each box represents a part of the image where a particular object was detected
detection_boxes = detection_graph.get_tensor_by_name('detection_boxes:0')

# Each score represents level of confidence for each of the objects.
# The score is shown on the result image, together with the class label.
detection_scores = detection_graph.get_tensor_by_name('detection_scores:0')
detection_classes = detection_graph.get_tensor_by_name('detection_classes:0')

# Number of objects detected
num_detections = detection_graph.get_tensor_by_name('num_detections:0')

# Initialize frame rate calculation
frame_rate_calc = 1
freq = cv2.getTickFrequency()
font = cv2.FONT_HERSHEY_SIMPLEX


# Initialize USB webcam feed
camera = cv2.VideoCapture(0)
ret = camera.set(3,IM_WIDTH)
ret = camera.set(4,IM_HEIGHT)

while(True):
    t1 = cv2.getTickCount()

    # Acquire frame and expand frame dimensions to have shape: [1, None, None, 3]
    # i.e. a single-column array, where each item in the column has the pixel RGB value
    ret, frame = camera.read()
    frame_expanded = np.expand_dims(frame, axis=0)

    # Perform the actual detection by running the model with the image as input
    (boxes, scores, classes, num) = sess.run(
        [detection_boxes, detection_scores, detection_classes, num_detections],
        feed_dict={image_tensor: frame_expanded})

    # Draw the results of the detection (aka 'visulaize the results')
    vis_util.visualize_boxes_and_labels_on_image_array(
        frame,
        np.squeeze(boxes),
        np.squeeze(classes).astype(np.int32),
        np.squeeze(scores),
        category_index,
        use_normalized_coordinates=True,
        line_thickness=8,
        min_score_thresh=0.85)

    cv2.putText(frame,"FPS: {0:.2f}".format(frame_rate_calc),(30,50),font,1,(255,255,0),2,cv2.LINE_AA)
    
    # All the results have been drawn on the frame, so it's time to display it.
    cv2.imshow('Object detector', frame)

    t2 = cv2.getTickCount()
    time1 = (t2-t1)/freq
    frame_rate_calc = 1/time1

    # Press 'q' to quit
    if cv2.waitKey(1) == ord('q'):
        break

camera.release()

cv2.destroyAllWindows()
```

Now run the script!
```
$ python3 play_object_detection.py
```

Press q when you are complete

Voila
