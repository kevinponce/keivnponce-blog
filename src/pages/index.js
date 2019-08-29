import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Confetti from '../components/confetti';
import Blogs from '../components/blogs';
import '../styles/index.scss'

class BlogIndex extends React.Component {
  render() {
    const { data, pageContext } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges;

    const {
      arduinoIcon,
      gatsbyIcon,
      googleMapsIcon,
      jsIcon,
      postgresIcon,
      pythonIcon,
      raspberryIcon,
      rubyIcon,
      htmlIcon,
    } = data;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <div className="home">
          <section className="band band-0">
            <div className="header-wrapper">
              <Confetti />
              <h2>Welcome</h2>
            </div>
          </section>
          <section className="band band-a">
            <div className="band-container">
              <div className="band-inner">
                <p>My name is Kevin Ponce. I am a software developer, who loves to build. Started programming in high school because I was too lazy to select the class I wanted to take next semester. I am not fully sure what I am going to be doing with this site, but I just started to blog to help me remember what I know.</p>
              </div>
            </div>
          </section>
          <section className="band band-b">
            <div className="band-container">
              <div className="band-inner">
                <h1>Latest Blogs</h1>
                <Blogs posts={posts}
                   pageContext={pageContext}
                   prefixUrl={'/blogs/'}
                   masonry={false}
                   arduinoIcon={arduinoIcon}
                   gatsbyIcon={gatsbyIcon}
                   googleMapsIcon={googleMapsIcon}
                   postgresIcon={postgresIcon}
                   pythonIcon={pythonIcon}
                   raspberryIcon={raspberryIcon}
                   rubyIcon={rubyIcon} 
                   htmlIcon={htmlIcon}
                   jsIcon={jsIcon}
                />
                <div className="read-more-wrapper">
                  <Link to='/blogs'>Read More</Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}

export default BlogIndex


export const pageQuery = graphql`
   query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC },
      limit: 3
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
            header {
              type
              bgColor
              icon
            }
          }
        }
      }
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
  }
`