import React from "react"
import PropTypes from "prop-types"
import './confetti.scss';

class Confetti extends React.Component {
  render() {
    const {
      animationDelay,
      backgroundColor,
      left,
    } = this.props;

    return (
      <div className="confetti"
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

class ConfettiLauncher extends React.Component {
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
                  key={`confetti-${i}`}
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
      <div className="confetti-wrapper">
        {this.launch()}
      </div>
    )
  }
}

export default ConfettiLauncher;
