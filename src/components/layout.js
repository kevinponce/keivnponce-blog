import { graphql, StaticQuery } from "gatsby" 
import React from "react"
import './layout.scss'
import '../pages/index.scss'
import { Link } from "gatsby"
import githubSVG from '../../content/assets/github.svg'
import twitterSVG from '../../content/assets/twitter.svg'
import codepenSVG from '../../content/assets/codepen.svg'
import searchSVG from '../../content/assets/search-24px.svg'
import Search from './search';

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      showSearch: false,
    }
  }
  render(data) {
    const { location, children } = this.props

    return (
      <div className={`l-site ${this.state.isOpen ? 'is-open' : ''}`}>
        <div className="l-nav">
          <nav className="nav">
            <div className={`menu close ${this.state.isOpen ? '' : 'hide'}`} onClick={(e) => { e.preventDefault(); this.setState({ isOpen: !this.state.isOpen }) }}>
              <div className="menu-hamburger"></div>
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
              <li className="nav-secondary social-link-wrapper">
                <a onClick={() => this.setState({ showSearch: true })}><img src={searchSVG} className="icon" alt="search icon"/><span>SEARCH</span></a>
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
        <div className={`search-fullpage ${this.state.showSearch ? 'display' : ''}`}>
          <div className="fullpage">
            <button id="close_btn" onClick={() => this.setState({ showSearch: false })}><span>&times;</span></button>
            <StaticQuery
              query={graphql`
                  query SearchIndexQuery {
                    siteSearchIndex {
                      index
                    }

                    gatsbyIcon: file(absolutePath: { regex: "/gatsby-icon.png/" }) {
                      childImageSharp {
                        fixed(width: 50, height: 50) {
                          ...GatsbyImageSharpFixed
                        }
                      }
                    }

                    pythonIcon: file(absolutePath: { regex: "/python-icon.png/" }) {
                      childImageSharp {
                        fixed(width: 50, height: 50) {
                          ...GatsbyImageSharpFixed
                        }
                      }
                    }

                    rubyIcon: file(absolutePath: { regex: "/ruby-icon.png/" }) {
                      childImageSharp {
                        fixed(width: 50, height: 50) {
                          ...GatsbyImageSharpFixed
                        }
                      }
                    }

                    htmlIcon: file(absolutePath: { regex: "/html-icon.png/" }) {
                      childImageSharp {
                        fixed(width: 50, height: 50) {
                          ...GatsbyImageSharpFixed
                        }
                      }
                    }

                    arduinoIcon: file(absolutePath: { regex: "/arduino-icon.png/" }) {
                      childImageSharp {
                        fixed(width: 50, height: 50) {
                          ...GatsbyImageSharpFixed
                        }
                      }
                    }

                    raspberryIcon: file(absolutePath: { regex: "/raspberry-icon.png/" }) {
                      childImageSharp {
                        fixed(width: 40, height: 55) {
                          ...GatsbyImageSharpFixed
                        }
                      }
                    }

                    postgresIcon: file(absolutePath: { regex: "/postgres-icon.png/" }) {
                      childImageSharp {
                        fixed(width: 50, height: 50) {
                          ...GatsbyImageSharpFixed
                        }
                      }
                    }

                    googleMapsIcon: file(absolutePath: { regex: "/google-maps-icon.png/" }) {
                      childImageSharp {
                        fixed(width: 50, height: 50) {
                          ...GatsbyImageSharpFixed
                        }
                      }
                    }

                    jsIcon: file(absolutePath: { regex: "/js-icon.png/" }) {
                      childImageSharp {
                        fixed(width: 50, height: 50) {
                          ...GatsbyImageSharpFixed
                        }
                      }
                    }

                    appleIcon: file(absolutePath: { regex: "/apple-icon.png/" }) {
                      childImageSharp {
                        fixed(width: 50, height: 50) {
                          ...GatsbyImageSharpFixed
                        }
                      }
                    }

                    databaseIcon: file(absolutePath: { regex: "/database.png/" }) {
                      childImageSharp {
                        fixed(width: 50, height: 50) {
                          ...GatsbyImageSharpFixed
                        }
                      }
                    }
                  }
                `}
              render={data => (
                <Search searchIndex={data.siteSearchIndex.index}
                        arduinoIcon={data.arduinoIcon}
                        gatsbyIcon={data.gatsbyIcon}
                        googleMapsIcon={data.googleMapsIcon}
                        postgresIcon={data.postgresIcon}
                        pythonIcon={data.pythonIcon}
                        raspberryIcon={data.raspberryIcon}
                        rubyIcon={data.rubyIcon}
                        htmlIcon={data.htmlIcon}
                        jsIcon={data.jsIcon}
                        appleIcon={data.appleIcon}
                        databaseIcon={data.databaseIcon}
                />
              )}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Layout
