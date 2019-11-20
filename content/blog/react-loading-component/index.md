---
title: React Loading Component
date: "2019-10-23T22:12:00.121Z"
tags: ["javascript", "react"]
header: { type: 'icon', bgColor: '#E6CE33', icon: 'js' }
description: How to create a loading Component in reactjs to prevent user from seeing component before data is loaded
---

Sometimes in react your view is dependent on a api call, and need to display a loading icon as you wait for the api.

Here is a snippet of code I use to accoplish this:

```
// example
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from './loading';

export default class Example extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 5000);
  }

  render() {
    return (
      <Loading>
        example
      </Loading>
    );
  }
}
```

```
// loading.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './loading.scss'

class Loading extends Component {
  constructor(props) {
    super(props);

    this.spinner = this.spinner.bind(this);
  }

  spinner() {
    if (this.props.loading) {
      return (
        <div className="loading">
          <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
           width="100px" height="100px" viewBox="0 0 40 40" enableBackground="new 0 0 40 40">
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
        </div>
      )
    }
  }

  render() {
    if (this.props.loading) {
      return this.spinner();
    }

    return this.props.children;
  }
}

Loading.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default Loading;
```

`loading.css`:
```
.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 0px;

  svg {
    margin: 6px 10px;

    path,
    rect{
      fill: #8ad7dd;
    }
  }
}
```