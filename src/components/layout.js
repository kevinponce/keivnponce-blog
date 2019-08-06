import React from "react"
import { Link } from "gatsby"
import './layout.scss'

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    return (
      <div className="l-site">
        <div className="l-nav">
          <nav className="nav">
            <ul>
              <li className="nav-primary">
                <Link
                  style={{
                    color: (location.pathname.indexOf('/blog') === 0 ? '#ff0000': '#fff'),
                  }}
                  to={`/`}
                >
                  BLOG
                </Link>
              </li>
              <li className="nav-primary">
                <Link
                  style={{
                    color: (location.pathname.indexOf('/projects') === 0 ? '#ff0000': '#fff'),
                  }}
                  to={`/`}
                >
                  PROJECTS
                </Link>
              </li>
              <li className="nav-primary">
                <Link
                  style={{
                    color: (location.pathname.indexOf('/about') === 0 ? '#ff0000': '#fff'),
                  }}
                  to={`/`}
                >
                  ABOUT
                </Link>
              </li>
              <li className="nav-secondary">
                <a href="https://github.com/kevinponce">GITHUB</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="l-page">
          <div className="menu">
            <div className="menu-hamburger"></div>
          </div>
          <div className="child-wrapper">{children}</div>
        </div>
      </div>
    )
  }
}

export default Layout
