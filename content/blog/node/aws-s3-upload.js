---
title: Copy files into s3
date: "2019-09-07T22:12:00.121Z"
tags: ["node"]
header: { type: 'icon', bgColor: '#E6CE33', icon: 'js' }
description: How to copy files into S3
---

```
npm install aws-sdk --save
```

## .env
```
AWS_ACCESS_KEY_ID=<the access key>
AWS_SECRET_ACCESS_KEY=<the secret>
AWS_BUCKET_NAME=<the bucket name>
```

```javascript
import AWS from 'aws-sdk'


async function uploadFile(filename, fileContent) {
  const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  });

  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `${filename}`,
    Body: fileContent
  }

  try {
    const stored = await s3.upload(params).promise()
    console.log(stored);
  } catch (err) {
    console.log(err)
  }
}

async function uploadLocalFile(fileWithPath) {
  const filename = path.basename(fileWithPath);
  const fileContent = fs.readFileSync(fileWithPath);

  await uploadFile(filename, fileContent);
}

async function uploadUrlFile(url) {
  try {
    const filename = 'other_' + path.basename(url);
    const response = await axios({
      method: 'get',
      url,
      responseType: 'stream'
    });

    await uploadFile(filename, response.data);
  } catch (err) {
      // Handle Error Here
      console.error(err);
  }
}

(async () => {
  // await uploadLocalFile(path.join(__dirname, '../test.wav'));

  await uploadUrlFile('https://will-smith-tts.s3.amazonaws.com/test.wav')
})();
```
