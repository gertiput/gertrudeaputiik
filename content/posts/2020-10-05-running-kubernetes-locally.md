---
date: 2020-05-10
title: 'Running kubernetes locally'
template: post
thumbnail: '../thumbnails/kub.png'
slug: running-kubernetes-locally
categories:
  - Code
tags:
  - containers
  - docker
  - kubernetes
---

In this article, we will be going over running kubernetes locally.

In the previous articles, we have covered how to setup your workstation and how to build a container image. In this article, we will walk through how to standup a local kubernetes cluster and running the container using a docker image.

First, we should discuss why you will bother running kubernetes in development. In general, it boils down to testing your app in an environment that approximates with what production will look like. In more specific terms, there are kubernetes mechanisms like `liveliness` and `readiness` progs that you probably want your app to leverage and a kubernetes cluster is the natural place to test those.

As you will see in this article, it's pretty straight forward to standup a local cluster using [kind](https://kind.sigs.k8s.io/docs/user/quick-start/) and running your app on it. Before we move on to the demo, it's worth pointing out that ``kind`` is not the only way to run kubernetes locally and may not even be the best. Many kubes spins up virtual machines on your local workstation and uses those as kubernetes nodes. If you are on a MAC or Windows, you can use docker desktop to run kubernetes, it's built in. But ``kind`` is the metable used today.

So let's go ahead and start our cluster. In my terminal, i will type ```kind create cluster``` 