import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Blogs from '../components/blogs';

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
      appleIcon,
      databaseIcon
    } = data

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <Blogs posts={posts}
               pageContext={pageContext}
               prefixUrl={`/${pageContext.tag}/`}
               arduinoIcon={arduinoIcon}
               gatsbyIcon={gatsbyIcon}
               googleMapsIcon={googleMapsIcon}
               postgresIcon={postgresIcon}
               pythonIcon={pythonIcon}
               raspberryIcon={raspberryIcon}
               rubyIcon={rubyIcon}
               htmlIcon={htmlIcon}
               jsIcon={jsIcon}
               appleIcon={appleIcon}
               databaseIcon={databaseIcon}
        />
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
   query($skip: Int, $limit: Int, $tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { tags: { in: [$tag] } } }
      sort: { fields: [frontmatter___date], order: DESC },
      limit: $limit,
      skip: $skip
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
`
