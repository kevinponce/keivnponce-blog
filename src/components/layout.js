import React from "react"
import './layout.scss'
import { Link } from "gatsby"
import githubSVG from '../../content/assets/github.svg'
import twitterSVG from '../../content/assets/twitter.svg'
import codepenSVG from '../../content/assets/codepen.svg'

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    }
  }

  render() {
    const { location, children } = this.props

    return (
      <div className={`l-site ${this.state.isOpen ? 'is-open' : ''}`}>
        <div className="l-nav">
          <nav className="nav">
            <div className={`menu close ${this.state.isOpen ? '' : 'hide'}`}>
              <div className="menu-hamburger" onClick={(e) => { e.preventDefault(); this.setState({ isOpen: !this.state.isOpen }) }}></div>
            </div>
            <ul>
              <li className="nav-primary logo">
                <Link to={`/`}>
                  Kevin Ponce.
                </Link>
              </li>
              <li className="nav-primary">
                <Link to={`/blogs`}
                  style={{
                    color: ((location.pathname.indexOf('/blog') === 0 || location.pathname.indexOf('/tags') === 0) ? '#69D2E7': '#fff'),
                  }}
                  to={`/blogs`}
                >
                  BLOG
                </Link>
              </li>
              <li className="nav-primary">
                <Link
                  style={{
                    color: (location.pathname.indexOf('/about') === 0 ? '#F9D423': '#fff'),
                  }}
                  to={`/about`}
                >
                  ABOUT
                </Link>
              </li>
              <li className="nav-secondary social-link-wrapper">
                <a href="https://github.com/kevinponce"><img src={githubSVG} className="icon" alt="github icon"/><span>GITHUB</span></a>
              </li>
              <li className="nav-secondary social-link-wrapper">
                <a href="https://twitter.com/UnofficiallyKev"><img src={twitterSVG} className="icon" alt="twitter icon"/><span>TWITTER</span></a>
              </li>
              <li className="nav-secondary social-link-wrapper">
                <a href="https://codepen.io/kevinponce"><img src={codepenSVG} className="icon" alt="codepen icon"/><span>CODEPEN</span></a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="l-page">
          <div className={`menu ${this.state.isOpen ? 'hide' : ''}`}>
            <div className="menu-hamburger dark" onClick={(e) => { e.preventDefault(); this.setState({ isOpen: !this.state.isOpen }) }}></div>
          </div>
          <div className="child-wrapper">{children}</div>
        </div>
      </div>
    )
  }
}

export default Layout
