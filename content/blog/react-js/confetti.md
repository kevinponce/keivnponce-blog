---
title: React Confetti
date: "2019-08-12T22:12:00.121Z"
tags: ["javascript", "react"]
header: { type: 'icon', bgColor: '#E6CE33', icon: 'js' }
description: How to add Confetti to a React project
---

Now I am almost ready to launch my website.
For me it is a celabration, because I have been talking about blogging and doing my site for 7 years...
I have designed it several time during this time, but never launched them.
But this time I am going to launch it.
I decided to have my homepage throw confetti to celabrate.

https://codepen.io/kevinponce/pen/OKoQNK

The confetti is a div that is set to a random color, start X location, and speed. And falls by using css keyframes to create a loop.

I created it with react and here is the code:
```javascript
const { Component } = React;
const { render } = ReactDOM;

class Confetti extends Component {
  render() {
    const {
      animationDelay,
      backgroundColor,
      left,
    } = this.props;

    return (
      <div class="confetti"
           style={{
             animationDelay,
             backgroundColor,
             left,
           }}
      >
      </div>
    );
  }
}
Confetti.propTypes = {
  animationDelay: PropTypes.string,
  backgroundColor: PropTypes.string,
  left: PropTypes.string,
}

class ConfettiLauncher extends Component {
  constructor(props) {
    super(props)
    
    this.launch = this.launch.bind(this);
    this.randomColor = this.randomColor.bind(this);
    this.randomDelay = this.randomDelay.bind(this);
    this.randomLeft = this.randomLeft.bind(this);
  }
  
  launch() {
    return Array.from(Array(100)).map((_, i) => {
      return (
        <Confetti animationDelay={this.randomDelay()}
                  backgroundColor={this.randomColor()}
                  left={this.randomLeft()}/>
      );
    }); 
  }
  
  randomColor() {
    const colors = ['#69D2E7', '#F9D423', '#F38630', '#FF4E50'];
    const random = parseInt(Math.random() * colors.length);
    return colors[random];
  }
  
  randomDelay() {
    const min = 10;
    const max = 60;
    let delay = parseInt(min + (Math.random() * (max - min)));
    delay = Math.round(delay) / 10
    return `-${delay}s`;
  }
  
  randomLeft() {
    return `${parseInt(Math.random() * 100)}%`;
  }
  
  render() {
    return (
      <div class="container">
        {this.launch()}
      </div>
    )
  }
}

class Test extends Component {
  render() {
    return(
      <div>
        <div className="confetti-wrapper">
          <ConfettiLauncher />
        </div>
      </div>
    );
  }
}
```

Here is the Sass:
```sass
html, body,
.container {
  height: 100%;
  margin: 0;
  padding: 0;
  width: 100%;
}
.confetti {
  width: 15px;
  height: 15px;
  position: absolute;
  left: 50%;
  animation: confetti 5s ease-in-out -2s infinite;
  transform-origin: left top;
}

@keyframes confetti {
  0% { transform: rotateZ(15deg) rotateY(0deg) translate(0,0); }
  25% { transform: rotateZ(5deg) rotateY(360deg) translate(-5vw,20vh); }
  50% { transform: rotateZ(15deg) rotateY(720deg) translate(5vw,60vh); }
  75% { transform: rotateZ(5deg) rotateY(1080deg) translate(-10vw,80vh); }
  100% { transform: rotateZ(15deg) rotateY(1440deg) translate(10vw,110vh); }
}

h1 {
  font-size: 100px;
  text-align: center;
  position: absolute;
  top: 50%;
  width: 100%;
  font-family: 'Open Sans', sans-serif;
}
```