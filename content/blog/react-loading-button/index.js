---
title: React Loading Button
date: "2019-09-12T22:16:00.121Z"
tags: ["javascript"]
header: { type: 'icon', bgColor: '#E6CE33', icon: 'js' }
---

A good user expires gives users fast response, but sometimes forms take a longs time to load.

It is best to provide a user with a feature to let them know it is loading, so I created a react loading button.

```javascript
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss'

class LoadingButton extends Component {
  constructor(props) {
    super(props);

    this.spinner = this.spinner.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  spinner() {
    if (this.props.loading) {
      return (
        <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
         width="40px" height="40px" viewBox="0 0 40 40" enableBackground="new 0 0 40 40">
        <path opacity="0.2" fill="#000" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
          s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
          c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"/>
        <path fill="#000" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
          C22.32,8.481,24.301,9.057,26.013,10.047z">
          <animateTransform attributeType="xml"
            attributeName="transform"
            type="rotate"
            from="0 20 20"
            to="360 20 20"
            dur="0.5s"
            repeatCount="indefinite"/>
          </path>
        </svg>
      )
    }
  }

  onClick() {
    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  render() {
    let className = 'loading-button';

    if (this.props.className) {
      className += ` ${this.props.className}`;
    }

    if (this.props.onClick) {
      return (
        <button className={className} onClick={this.onClick}>
          {this.spinner()}
          {this.props.children}
        </button>
      )
    }

    return (
      <button type="submit" className={className}>
        {this.spinner()}
        {this.props.children}
      </button>
    )
  }
}

LoadingButton.propTypes = {
  loading: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default LoadingButton;
```

```css
.loading-button {
  margin: 0 0 2em;
  height: 100px;
  width: 20%;
  text-align: center;
  padding: 1em;
  margin: 0 auto 1em;
  display: inline-block;
  vertical-align: top;
  position: relative;
}

.loading-button svg {
  margin: 6px 10px;
  vertical-align: bottom;
  position: absolute;
  left: 0px;
}

.loading-button svg path,
.loading-button svg rect{
  fill: #8ad7dd;
}

```
