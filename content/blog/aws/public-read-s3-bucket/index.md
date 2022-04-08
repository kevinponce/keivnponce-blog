---
title: Public read s3 bucket
date: "2022-04-08T22:12:00.121Z"
tags: ["ruby", "ruby-on-rails"]
header: { type: 'icon', bgColor: '#DE3F24', icon: 'ruby' }
description: How to setup iam policy access s3.
---

Update S3 bucket to have Block Public Access set to:
![Edit Block Public Access](./editBlockPublicAccess.png)

Update the buckets policy to:
```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicRead",
            "Effect": "Allow",
            "Principal": "*",
            "Action": [
                "s3:GetObject",
                "s3:GetObjectVersion"
            ],
            "Resource": "arn:aws:s3:::BUCKET_NAME/*"
        }
    ]
}
```

Do not forget to update *BUCKET_NAME*