---
date: 2020-04-30
title: 'containers'
template: post
thumbnail: '../thumbnails/kub.png'
slug: containers
categories:
  - Code
tags:
  - containers
  - docker
---


Today I wanted to provide a brief introduction to some key container concepts. First, let’s start with the seminal question, what are containers? 


First, containers take their name from their real life counterparts, we can leverage a container of any sort for this analogy, but the de-facto standard visualization is of course, the shipping container. When you’re shipping items to the other side of the world, containers make it easy to package goods together into a single shipment. The standard shape and size makes packing lots of containers onto a ship efficient, the walls provide isolation, preventing items from getting mixed together, they are portable, designed to be easily moved and shipped, and there’s a clear separation of concerns. One party is responsible for packing the container with the right items, and another party is responsible for making sure the container gets to its destination.

Containers in virtual life if you will, have very similar properties. Containers are essentially abstractions that provide a standardized way for you to package your application, its configuration and dependencies together into one logical object. These virtual containers are standardized in both how the contents are created, and largely, how they expose resources to your application. The packaging provides a logical separation between applications, it also provides efficiency, allowing many applications to run inside a single host. They are portable, because all dependencies are packaged together with the application, providing a consistent runtime environment regardless of the target system, whether that’s an on premises data center, the public cloud, or even your local laptop.

There’s also a separation of concerns. Developers are able to focus on writing containerized applications, provided some guard rails and best practices are are provided, and operations teams are able to focus on running containers at scale, usually leveraging a container orchestration platform.

Before we go any further however, let’s zoom in a little bit on what an application really is. To humans, applications are software programs developed to perform specific tasks, and execute on a computer. They are written in human readable language and compiled into something the computer understands.

To computers, applications are binary instructions that tell the computer how to execute tasks. The tasks are represented as processes in the operating system, and all computation is primarily based on managing the utilization of three key components of a computer, the CPU, memory and I/O, or input, output. The CPU executes instructions, which is your application on data that is read into memory from the disk or network, and access to these resources is mediated by the operating system, which manages how much of each resource is provided to each process or application.

So now that we understand applications a little bit better, let’s dive back into what a container is, and explain  how that matters to  an application, and how those things fit together. Of course it’s an unfair comparison to compare virtual machines to containers, because they work together  quite commonly, but let’s go ahead and talk through  some of the distinctions here.

So of course, if we start off in building a virtual machine, we start off with hardware, and we have a host operating system, and then we have to install a hypervisor. The hypervisor is what allows you to divide up that single physical infrastructure into many smaller virtual machines. Within those virtual machines, you’re able install  a unique operating system, and of course this operating can system can be  any operating system you like, and inside of that operating system, applications can be installed along with their dependencies.

In the container world, we start at the same place, we have to have hardware and infrastructure and an operating system, but we also now have a new component, the container runtime, and of course Docker is the most common container runtime used today. In addition to the container runtime, now we have the applications and their dependencies and libraries packaged together, and this is only possible because the container runtime manages that packaging and is able to understand  what a container actually is, and how that packaging works, and make that operate within the context of the operating system.

Of course, to the container runtime, it doesn’t really care if it’s running on bare metal, or if it’s running on a virtual machine,  but certainly  both options are possible and quite common.

But what are containers really, and how do I put my applications into those container boxes? I just wanna remind you, in my earlier definition, I did use the term logical object, and why? Because containers don’t really exist, and let’s go into that a little bit further. Containers leverage namespaces and control groups, otherwise known as cgroups, which are Linux Kernal features and they provide the functionality that we expect, the isolation, the packaging and so on.

Namespaces allow the operating system to limit what a process can see, such as other processes,  the file system and more. We’re not gonna go into all the different types of namespaces, but certainly process isolation and file system isolation are are two of the key components. Cgroups on the other hand, limit what resources a process can do, or use, how much CPU, how much memory, and so on, and so this again, mediated by cgroups and allows  you to leverage this appropriately.

All right, so now that we’ve got a little bit more information, we can describe containers slightly differently. A container is a process which is extracted from tarballs of your application and its dependency, it’s anchored to namespaces, which provides the necessary isolation we desire, and it’s controlled by cgroups which helps us with resource utilization management.

And now that we have some of the underlying technology that makes containers possible out of the way, let’s take a look at the Dockerfile, which is the container specification. The Dockerfile provides a set of instructions for how you want your container to be built and run. 

And this is a bit more of the same thing, but leveraging a visual reference. The container runtime is a client server application. The Docker command line uses an API to connect to the container runtime, and the container runtime actually performs all the work. When you execute a docker build, the container runtime builds an image from the Docker file that you’ve already defined, and then that image can be stored in a container registry, so  it is accessible to other systems, and a container really is simply a runnable image, and when you perform a Docker run, it takes that image, unpacks it, the container runtime unpacks it, and executes it as a process, a process like any other process on your operating system.

And so, in conclusion, containers don’t really exist, but of course they’re abstractions, and like most abstractions, ah they have the ability to be very good or very bad, and in this case,  container abstractions provide a lot of value, and are really a pretty amazing technology. So  even though containers don’t exist, long live containers.

Thank you for reading, and hopefully this provides a little bit of background  that helps you understand a little bit more about what containers are, and how they work.