---
date: 2020-06-26
title: 'Create and execute a lambda'
template: post
thumbnail: '../thumbnails/aws-lambda.jpg'
slug: create-and-execute-a-lambda
categories:
  - Code
tags:
  - AWS
  - lambda
---

In this hands-on article, you will write your first Lambda function using Node.js.

## Prerequisites:
- AWS account

By the end of this article, you will be able to:
- Author a Lambda function using Node.js via the console
- Test a Lambda function via the console

## Steps:

1. Create a Lambda Function
    - On the AWS Management Console page, type ```lambda``` in the ```Find Services``` box and then select ```Lambda```.

        ![](../images/lambda.png)
    
    - Click the “Create function” button and select ```Author from scratch```.

        ![](../images/lambda1.png)

        ![](../images/lambda2.png)

    - Enter a Function name and select ```Node.js 8.10``` as the runtime.

        ![](../images/lambda3.png)

    - For Permission, click ```Choose or create an execution role```, and select ```Create a new role with basic Lambda permissions```.

        ![](../images/lambda4.png)

    - Click ```Create function```.

2. Modify a Lambda Function
    - Scroll down to the code for the Lambda function.

    - Replace the code on Line 5 with the statement below:
        ```
        body: JSON.stringify('Hello ' + event.key1 + ' from Lambda!'),

        ```

    - ![](../images/lambda5.png)

    - Click the ```Save``` button in the upper right-hand corner.

    - Scroll down to the ```Basic Settings``` section
        - For the Description, enter ```my travel blog```.

        - Change the ```Timeout``` from 3 seconds to 10 minutes.

            ![](../images/lambda6.png)

3. Test a Lambda Function
    - Click on the ```Test``` button in the upper right-hand corner.
        ![](../images/lambda7.png)

    - Ensure the ```Event template``` is ```Hello World```.

    - For the ```Event name``` enter ```TestEvent``` ***Important***: The name cannot contain spaces.

        ![](../images/lambda8.png)

    - Update the JSON to the statement below, replacing the statement with your name.

        ```
        {
            "key1": "Place your name here"
        }
        ```

4. Click ```Create```.

5. Click the ```Test``` button in the upper right-hand corner again.

6. Scroll up to see the output in the ```Execution Results``` pane.

    ![](../images/lambda10.png)
