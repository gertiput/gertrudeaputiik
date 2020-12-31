---
date: 2020-06-18
title: 'Launch an EC2 instance'
template: post
thumbnail: '../thumbnails/amazon-ec2.png'
slug: launch-an-ec2-instance
categories:
  - Code
tags:
  - ec2
  - AWS
---

In this hands-on article, you will launch a virtual server in the cloud within a secure network. You will also manage additional storage options for your server.

## Prerequisites:
- AWS Account

By the end of this article, you will be able to:

- Launch a secure EC2 (Elastic Cloud Compute) instance within a VPC (Virtual Private Cloud)
- Manage an EBS volume

## Steps:
1. Access VPC service from AWS Management Console
    - On the ```AWS Management Console``` page, type ```vpc``` in the ```Find Services``` box and then select ```VPC```.
        
        ![](../images/vpc.png)

    - Click the ```Launch VPC Wizard``` button and select ```VPC with a Single Public Subnet```. Important: In the ```VPC Name``` text box, enter a name for the VPC, and then select the first AZ from the Availability Zone dropdown. Leave everything else as the defaults.

        ![](../images/vpc.png)

        ![](../images/single.png)

        ![](../images/console.png)

        ![](../images/pic.png)

    - Select ```Create VPC``` button.

    - You should see the ```VPC Successfully Created``` page, click the OK button in the far right. Important: You should see a table that lists all of the VPCs, make a note of the one just created.

         ![](../images/ok.png)

2. Launch an EC2 instance
    - Navigate to the EC2 console page, by clicking on ```Services``` in the upper left-hand menu. Type ```EC2``` in the text box and click on ```EC2``` found in the search results.

         ![](../images/ec2.png)

    - On the EC2 Dashboard page, click on ```Instances``` in the left-hand navigation.

         ![](../images/ec3.png)

    - Click ```Launch Instance```.

         ![](../images/ec4.png)

    - Select the ```Amazon Linux 2 AMI (HVM), SSD Volume Type Amazon Machine Image (AMI)```. Important: You are free to choose a different AMI, but to avoid excessive charges, pick one that says, ```Free Tier Eligible```.

         ![](../images/instance2.png)

    - For the ```Instance Type```, select the free-tier instance type of ```t2.micro```.

         ![](../images/instance3.png)

    - Click on ```Next: Configure Instance Details```.

         ![](../images/ebs.png)

    - Enter the 1 for the ```Number of Instances```.

         ![](../images/ebs.png)

    - For Purchasing option, leave unchecked.

    - For Network, select the VPC that was created in the previous step, and then select the subnet in to which to launch the instance.

         ![](../images/ebs.png)

3. Attach an EBS volume
    -   Click on ```Next: Add Storage``` to attach an EBS volume. Important: Here we already see there is a root volume (or device) attached to your instance, this is an EBS volume. We are going to add additional storage.

         ![](../images/storage.png)

    - To attach additional storage, click on ```Add New Volume```.

    - Select ```Delete on Termination``` and keep the other default settings.

         ![](../images/ebs_volume.png)

    - Click ```Review and Launch```.

         ![](../images/review.png)

    - Click ```Launch```.

    - Generate and download a new key pair and then click ```Launch Instances```. Important: This will allow you to SSH into your instance from your local machine. This is a one-time process, so generate and download the new key pair now.

         ![](../images/key.png)

    - The launch will take a couple of minutes, select ```View Instances``` during the wait.

         ![](../images/view.png)

    - Check the instance state, it should say running.

         ![](../images/instance4.png)

Congratulations! You’ve launched your first virtual server in the cloud.

4. Cleanup & Disable EC2 Instance To avoid recurring charges for leaving an instance running, let’s disable the EC2 instance and terminate the VPC

    - From the EC2 Dashboard, select the instance just created, click ```Actions```, then ```Instance State```, and then select ```Terminate```.

    - From the VPC Dashboard, select the VPC just created, click ```Actions```, then ```Delete VPC```.