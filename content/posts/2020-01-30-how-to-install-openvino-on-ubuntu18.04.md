---
date: 2020-01-30
title: 'How to install openvino on ubuntu 18.04'
template: post
thumbnail: '../thumbnails/openvino.png'
slug: how-to-install-openvino-on-ubuntu18.04
categories:
  - Code
tags:
  - openvino
  - opencv
---




How I installed OpenVINO on Ubuntu 18.04

This is a comprehensive document as to how I successfully installed OpenVINO on Ubuntu. Your mileage may vary.

First Install OpenCV and CMake


So for this I will summarize the steps below:

Install the required dependencies: 
````
$ sudo apt install build-essential cmake git pkg-config libgtk-3-dev \
libavcodec-dev libavformat-dev libswscale-dev libv4l-dev \
libxvidcore-dev libx264-dev libjpeg-dev libpng-dev libtiff-dev \
gfortran openexr libatlas-base-dev python3-dev python-numpy \
libtbb2 libtbb-dev libdc1394-22-dev
````
Create an opencv_build directory, cd into it and then clone the OpenCV and OpenCV contrib repositories:

```
$ mkdir ~/opencv_build && cd ~/opencv_build
$ git clone https://github.com/opencv/opencv.git
$ git clone https://github.com/opencv/opencv_contrib.git
```

Once the download is complete, create a build directory and cd into it:
```          
$ cd ~/opencv_build/opencv
$ mkdir build && cd build
```         
Now setup the build with CMake:

````
$ cmake -D CMAKE_BUILD_TYPE=RELEASE \
-D CMAKE_INSTALL_PREFIX=/usr/local \
-D INSTALL_C_EXAMPLES=ON \
-D INSTALL_PYTHON_EXAMPLES=ON \
-D OPENCV_GENERATE_PKGCONFIG=ON \
-D OPENCV_EXTRA_MODULES_PATH=~/opencv_build/opencv_contrib/modules \
-D BUILD_EXAMPLES=ON ..
````  
4. Start compiling with make and then install, then verify if it was installed correctly:

```
$ make -j(number of cores your cpu has), e.g. make -j2 or make -j4
$sudo make install
$ python3 -c  “import cv2; print(cv2.__version__)
```

Now to install OpenVINO

To install OpenVINO, I consulted the official documentation here: https://docs/openvinotoolkit.org/latest/_docs_install_guides_installing_openvino_linux.html

However, I will summarize the steps here to help you

Make sure to download OpenVINO from the link I provided. Register when prompted. Also, keep the serial number given to you. 
Change directories to your downloads directory with $ cd ~/Downloads

The file is saved in the directory as l_openvino_toolkit_p_<version>.tgz

Untar the file using the following command:

```
$ tar -xvf l_openvino_toolkit_p_<version>.tgz
``` 


Then cd into the l_openvino_toolkit_p_<version> directory:

```
$ cd l_openvino_toolkit_p_<version>
```

Now, you can install either using a GUI or CLI Installation using the following commands:

```
$ sudo ./install.sh 
Or 
$ sudo ./install_GUI.sh
```

Follow the onscreen instructions and it will tell you what needs to be installed or what you will be prompted to install later. In my case it told me I would install libgtk2.0-dev.
You can customize or choose a default installation. Choose default if you’re new to this.
Openvino will be installed on the /opt/intel/openvino_<version> directory.
The first part of the installation will be complete, next you have to set up the variables, configure the model optimizer and add dependencies.
Change to the install_dependencies directory with $ cd /opt/intel/openvino/install_dependencies

Run the script to download the needed dependencies with the following:

```
$ sudo -E ./install_openvino_dependencies.sh
```
Next set your variables with the 

```
$ source /opt/intel/openvino/bin/setupvars.sh 
```
command. Optionally you can add it to your .bashrc file in the last line. Use nano or vi to edit the file. Just add that line at the end and source it. 
Next, configure the model optimizer by changing to the prerequisites directory with 

```
$ cd /opt/intel/openvino/deployment_tools/model_optimizer/install_prerequisites
```
to start the process. Then run the script to configure the model optimizer with

``` 
$ sudo ./install_prerequisites.sh
```
If you want to install only a specified model use the

``` 
$ sudo ./install_prequisites_<model name>.sh
``` 
command instead.
To verify installation, go to the Inference Engine demo directory with 

```
$ cd /opt/intel/openvino/deployment_tools/demo.
```
Then run the image classification verification script with
``` 
$ ./demo_squeezenet_download_convert_run.sh.
```
If it says execution successful then it has run correctly.
Next, run the Inference Pipeline verification script with 

```
$ ./demo_security_barrier_camera.sh.
```
When it completes you should get an image that displays the resulting frame with detections rendered as bounding boxes and text. Your framerate will vary depending on the machine you have. Close the window to verify installation.
Congratulations, you have installed OpenVINO. Optionally you can add dependencies for Intel Processor graphics or a VPU such as the Compute Sitck 2. Those you can find on the documentation I provided. 

So that’s it. That’s how I successfully installed OpenVINO on my machine.  
