---
title: Checkbox Custom Style
date: "2019-08-29T12:12:00.121Z"
tags: ["html"]
header: { type: 'icon', bgColor: '#E44D25', icon: 'html' }
---

Checkboxes are too hard to style, but designers always design them...

I personally do not like to import a library to do them.

So I created my own. Well with the help of the internet.

```html
<label className="checkboxWrapper">
  Example
  <input type="checkbox"
         name="example"
         checked
  <span class="checkmark"></span>
</label>
```

```sass
.checkboxWrapper {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    -webkit-appearance: checkbox !important;
    -moz-appearance: checkbox !important;
    -ms-appearance: checkbox !important;
    -o-appearance: checkbox !important;
    appearance: checkbox !important;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
  }

  &:hover input ~ .checkmark {
    background-color: #ccc;
  }

  input:checked ~ .checkmark {
    background-color: #232770;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  input:checked ~ .checkmark:after {
    display: block;
  }

  .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
}
```