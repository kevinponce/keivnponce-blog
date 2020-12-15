import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql, Link } from "gatsby";
import '../styles/projects.scss';

class Misc extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <div className="projects">
          <section className="band band-a">
            <div className="band-container">
              <div className="band-inner">
                <h1>Music Maker</h1>
                <p>I created a javascript Music Maker</p>
                <Link
                  style={{
                    color: '#fff',
                  }}
                  to={`/misc/music-maker`}
                >
                  Play Me
                </Link>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}

export default Misc

export const pageQuery = graphql`
   query{
    site {
      siteMetadata {
        title
      }
    }
  }
`