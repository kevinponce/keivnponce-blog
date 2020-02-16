import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "gatsby-image"
import { rhythm } from "../utils/typography"
import './about.scss'

class AboutPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Kevin Ponce About"
             description="Personal blog documenting fun facts, projects and things I have learned"
        />
        <div id="about">
          <h5>About</h5>
          <h1>Let me introduce myself.</h1>

          <div className="intro-info">
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt="Kevin Ponce"
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 144,
                minHeight: 144,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
              className="img-small"
            />

            <p className="lead">Hello. I am Kevin Ponce and I love to build things. Welcome to my blog! I am using my blog to document things I have learned throughout my career, and hopely make someone else's life easier by making it available.</p>
          </div>
        </div>
      </Layout>
    )
  }
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    avatar: file(absolutePath: { regex: "/kevin.jpg/" }) {
      childImageSharp {
        fixed(width: 144, height: 144) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
