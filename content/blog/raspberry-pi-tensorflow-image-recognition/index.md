---
title: Raspberry PI Tensorflow Image Recognition
date: "2019-08-04T22:12:00.121Z"
tags: ["raspberry"]
header: { type: 'icon', bgColor: '#B41039', icon: 'raspberry' }
description: How to use Tensorflow Image Recognition on a Raspberry PI for your next machine learning project
---

###Updated Raspberry p
Getting tensorflow image recognition is an important building block
Here are the step I had to do to get it to work:
```
$ sudo apt-get update
$ sudo apt-get dist-upgrade
$ mkdir tf
$ cd tf
```

###Install Tensorflow
go to:
`https://github.com/lhelontra/tensorflow-on-arm/releases`

If the realses are out of date, you will have to manually compile tensorflow.
copy url for:
tensorflow-X.XX.X-cp35-none-linux_armv7l.whl

```
$ wget tensorflow-wheel-url-from-above
$ sudo pip3 install file-download-from-wget
$ sudo apt-get install libatlas-base-dev
$ sudo pip3 install pillow lxml jupyter matplotlib cython
$ sudo apt-get install python-tk
```

###Install OpenCV
```
$ sudo apt-get install libjpeg-dev libtiff5-dev libjasper-dev libpng12-dev
$ sudo apt-get install libavcodec-dev libavformat-dev libswscale-dev libv4l-dev
$ sudo apt-get install libxvidcore-dev libx264-dev
$ sudo apt-get install qt4-dev-tools
$ pip3 install opencv-python
```

###Compile and Install Protobuf
```
$ sudo apt-get install autoconf automake libtool curl
```

Go to:
`https://github.com/protocolbuffers/protobuf/releases`

copy url for:
protobuf-all-X.X.X.tar.gz

```
$ wget url-from-protobuf-releases
$ tar -zxvf protobuf-all-X.x.X.tar.gz
$ cd protobuf-X.X.X/
$ ./configure
$ make
$ make check
$ sudo make install
$ cd python
$ export LD_LIBRARY_PATH=../src/.libs
$ python3 setup.py build --cpp_implementation
$ python3 setup.py test --cpp_implementation
$ sudo python3 setup.py install --cpp_implementation
$ export PROTOCOL_BUFFERS_PYTHON_IMPLEMENTATION=cpp
$ export PROTOCOL_BUFFERS_PYTHON_IMPLEMENTATION_VERSION=3
$ sudo ldconfig
```

Now protobuf is installed, you can test it be entering the following command:
```
$ protoc
```

To get tenorflow working, reboot Raspberry pi
```
$ sudo reboot now
```

###Setup tensorflow
```
$ mkdir tensorflow1
$ cd tensorflow1
$ git clone --recurse-submodules https://github.com/tensorflow/models.git
$ sudo apt-get install vim
$ sudo vim ~/.bashrc
# add the following to the end of the file ~/.bashrc
export PYTHONPATH=$PYTHONPATH:/home/pi/tensorflow1/models/research:/home/pi/tensorflow1/models/research/slim
```

```
$ cd tensorflow1/models/research/object_detection/
```

Go to: `https://github.com/tensorflow/models/blob/master/research/object_detection/g3doc/detection_model_zoo.md`

copy the link to `ssdlite_mobilenet_v2_coco`

```
$ wget link-from-about
$ tar -xzvf file-download-above
$ cd ~/tensorflow1/models/research
$ protoc object_detection/protos/*.proto --python_out=.
```

###Test object detector
```
$ cd ~/tensorflow1/models/research/object_detection
$ wget https://github.com/EdjeElectronics/TensorFlow-Object-Detection-on-the-Raspberry-Pi/blob/master/Object_detection_picamera.py
$ python3 Object_detection_picamera.py
```

Voila
