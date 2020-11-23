---
title: Aws iam s3 policy
date: "2020-03-01T22:12:00.121Z"
tags: ["ruby", "ruby-on-rails"]
header: { type: 'icon', bgColor: '#DE3F24', icon: 'ruby' }
description: How to setup iam policy access s3.
---

AWS is amazing!
S3 is one service I have to use, even when I use heroku to host the application.
When I create new programmatic IAM, I do not like to create users that have access to everything.
This is keeps your application more secure.
Here is an example of an iam permission policy to give give iam access to s3 bucket:
*make sure you change name *example-s3-bucket-name* to your bucket name*

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "s3:*"
            ],
            "Resource": [
                "arn:aws:s3:::example-s3-bucket-name/*"
            ]
        }
    ]
}
```
