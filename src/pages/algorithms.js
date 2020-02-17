import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql, Link } from "gatsby";
import '../styles/projects.scss';

class Algorithms extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Algorithms" />
        <div className="projects">
          <section className="band band-a">
            <div className="band-container">
              <div className="band-inner">
                <h1>Bubble Sort</h1>
                <p>Here is a visualization of bubble sort that was created in p5.</p>
                <Link
                  style={{
                    color: '#fff',
                  }}
                  to={`/algorithms/bubble-sort`}
                >
                  Play Me
                </Link>
              </div>
            </div>
          </section>
          <section className="band band-b">
            <div className="band-container">
              <div className="band-inner">
                <h1>Quick Sort</h1>
                <p>Here is a visualization of quick sort that was created in p5.</p>
                <Link
                  style={{
                    color: '#fff',
                  }}
                  to={`/algorithms/quick-sort`}
                >
                  Play Me
                </Link>
              </div>
            </div>
          </section>
          <section className="band band-c">
          <div className="band-container">
            <div className="band-inner">
              <h1>Flood Fill</h1>
              <p>Here is a visualization of flood fill that was created in p5.</p>
              <Link
                style={{
                  color: '#fff',
                }}
                to={`/algorithms/flood-fill`}
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

export default Algorithms

export const pageQuery = graphql`
   query{
    site {
      siteMetadata {
        title
      }
    }
  }
`

/*

<section className="band band-d">
  <div className="band-container">
    <div className="band-inner">
      <h1>Nulla tempor laoreet</h1>
      <p>Nulla tempor laoreet sagittis. Donec molestie odio sit amet tincidunt egestas. Ut ut nisi nec felis vehicula pharetra. Nunc ullamcorper vitae lectus vitae consectetur. Quisque pharetra lorem metus, at lacinia magna malesuada non. Maecenas tristique risus quis massa convallis tempus in non turpis. Mauris pretium purus sed lacus euismod, eu cursus massa commodo. Nulla in erat ut ex imperdiet iaculis. Aliquam erat volutpat. Sed pellentesque et neque vitae accumsan. Etiam nec dolor quis est dignissim viverra. Nunc et pulvinar felis. Nulla in varius turpis. Curabitur non diam libero. Nam porttitor orci in metus sagittis</p>
    </div>
  </div>
</section>
*/

