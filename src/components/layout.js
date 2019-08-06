import React from "react"
import './layout.scss'
import Image from "gatsby-image"
import { Link, graphql, StaticQuery, useStaticQuery } from "gatsby"

import { rhythm, scale } from "../utils/typography"

import githubSVG from '../../content/assets/github.svg'
import twitterSVG from '../../content/assets/twitter.svg'

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
              <li className="nav-secondary social-link-wrapper">
                <a href="https://github.com/kevinponce"><img src={githubSVG} className="icon"/><span>GITHUB</span></a>
              </li>
              <li className="nav-secondary social-link-wrapper">
                <a href="https://github.com/kevinponce"><img src={twitterSVG} className="icon"/><span>TWITTER</span></a>
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
