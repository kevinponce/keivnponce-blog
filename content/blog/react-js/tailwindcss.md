---
title: tailwindcss
date: "2021-08-01T22:12:00.121Z"
tags: ["javascript"]
header: { type: 'icon', bgColor: '#E6CE33', icon: 'js' }
description: How to use tailwindcss in React Project.
---

User https://heroicons.com/ for icons


```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## tailwind.config.js
```javascript
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## add to index.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```


| Class       | CSS          |
|:------------|:-------------     |
| p-0         |padding: 0px;      |
| px-0        |padding-left: 0px; \n padding-right: 0px; |
| py-0        |padding-top: 0px; \n padding-bottom: 0px; |
| pl-0        |padding-left: 0px; |
| pr-0        |padding-right: 0px; |
| pt-0        |padding-top: 0px; |
| pb-0        |padding-bottom: 0px; |
| m-0         |margin: 0px;      |
| w-0         |width: 0px; |
| w-px        |width: 1px; |
| w-1         | width: 0.25rem; /* 4px */ |
| w-auto      | width: auto; |
| w-1/2       | width: 50%; |
| w-full      | width: 100%; |
| w-screen    | width: 100vw; |
| w-min       | width: min-content; |
| w-max       | width: max-content; |
| w-fit        | width: fit-content; |