---
title: React Loading Button
date: "2019-10-23T22:12:00.121Z"
tags: ["javascript", "react"]
header: { type: 'icon', bgColor: '#E6CE33', icon: 'js' }
description: How to add a loading button to reactjs to provide feedback for good user experience
---

In order to provide a good user experience, user should recieve fast feedback when they click a button.

Sometimes network calls can take too long, so we have to display a something to tell user that something is happening.


Here is a simple react component that will accomplish this, and is easily reusable.

```
// example.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoadingButton from './loadingButton';

export default class Example extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
    }

    this.spinner = this.spinner.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  render() {
    return (
      <LoadingButton loading={this.state.loading}
                     onClick={() => this.setState({ loading: !this.state.loading }) }
      />
    )
  }
}
```

```
// loadingButton.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './loadingButton.scss'

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
    if (this.props.onClick) {
      return (
        <button className="loading-button" onClick={this.onClick}>
          {this.spinner()}
          {this.props.children}
        </button>
      )
    }

    return (
      <button type="submit" className="loading-button">
        {this.spinner()}
        {this.props.children}
      </button>
    )
  }
}

LoadingButton.propTypes = {
  loading: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
};

export default LoadingButton;
```

```
// loadingButton.scss
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

  svg {
    margin: 6px 10px;
    vertical-align: bottom;
    position: absolute;
    left: 0px;

    path,
    rect{
      fill: #8ad7dd;
    }
  }
}

```
