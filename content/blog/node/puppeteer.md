---
title: Puppeteer
date: "2019-09-07T22:12:00.121Z"
tags: ["node"]
header: { type: 'icon', bgColor: '#E6CE33', icon: 'js' }
description: How to use puppeteer
---

First install puppeteer by running:
```
npm install puppeteer --save
```

A nice hack to find a selector in chrome is to:
1. right click and inspect
2. right click element in elements
3. Hover over copy
4. Click JS Path

```javascript
import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://fakeyou.com/');

  // wait for select to not be disabled
  await page.waitForSelector('select[name=tts-model-select]:not([disabled])');

  // select dropdown answer
  await page.select('select[name=tts-model-select]', 'TM:jfv4z77ycc99')

  // fill in answer
  await page.type('textarea', 'ahh that\'s hot');

  // select a button by name
  const [button] = await page.$x("//button[contains(., 'Speak')]");
  if (button) {
    // click button
    await button.click();
  }

  const permalink_and_download_js_path = "#viewable > div:nth-child(2) > div:nth-child(6) > div > article > div > a"
  await page.waitForSelector(permalink_and_download_js_path);
  await page.click(permalink_and_download_js_path);

  const download_js_path = "#viewable > div:nth-child(2) > a";
  await page.waitForSelector(download_js_path);

  // get attribute
  const attr = await page.$$eval(download_js_path, el => el.map(x => x.getAttribute("href")));
  console.log(attr)

  // screen shot
  await page.screenshot({ path: 'example.png', fullPage: true });

  await browser.close();
  console.log('closed')
})();
```

Sometime you might want to debug futher and wil want to see html.

Install pretty to make the html pretty!
```
npm install pretty --save
```

```javascript
// npm install puppeteer --save
import puppeteer from 'puppeteer';
import fs from 'fs';
import pretty from 'pretty';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://google.com/');

  await page.waitForTimeout(100);

  const html = await page.content();
  fs.writeFile('./google.html', pretty(html), err => {
    if (err) {
      console.error(err)
      return
    }
    // file written successfully
  })

  await browser.close();
  console.log('closed')
})();
```