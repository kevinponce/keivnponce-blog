import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql, Link } from "gatsby";
import '../styles/projects.scss';

class Games extends React.Component {
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
                <h1>Tic Tac Toe</h1>
                <p>I created a javascript version of Tic Tac Toe using p5.</p>
                <Link
                  style={{
                    color: '#fff',
                  }}
                  to={`/games/tic-tac-toe`}
                >
                  Play Me
                </Link>
              </div>
            </div>
          </section>
          <section className="band band-b">
            <div className="band-container">
              <div className="band-inner">
                <h1>Mine Sweeper</h1>
                <p>I created a javascript version of Mine Sweeper using p5.</p>
                <Link
                  style={{
                    color: '#fff',
                  }}
                  to={`/games/mine-sweeper`}
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

export default Games

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
<section className="band band-c">
  <div className="band-container">
    <div className="band-inner">
      <h1>Sed consectetur neque</h1>
      <p>Sed consectetur neque et libero placerat, dapibus laoreet sem condimentum. Nunc suscipit pharetra nunc ac interdum. Quisque justo magna, porttitor quis bibendum eu, ultrices nec justo. Cras mattis ut lectus at ullamcorper. Mauris vestibulum est sed sapien euismod, a pretium arcu lacinia. Donec pharetra non massa ac rhoncus. In in magna felis. Ut porta nec nunc a condimentum. Nullam ultricies sollicitudin enim ac scelerisque. Nam porta, leo in euismod suscipit, elit lorem eleifend neque, non hendrerit quam odio quis felis. Praesent id ullamcorper neque, in fermentum mauris. Curabitur sodales erat sed nisi dictum, sit amet vehicula eros malesuada.</p>
    </div>
  </div>
</section>
<section className="band band-d">
  <div className="band-container">
    <div className="band-inner">
      <h1>Nulla tempor laoreet</h1>
      <p>Nulla tempor laoreet sagittis. Donec molestie odio sit amet tincidunt egestas. Ut ut nisi nec felis vehicula pharetra. Nunc ullamcorper vitae lectus vitae consectetur. Quisque pharetra lorem metus, at lacinia magna malesuada non. Maecenas tristique risus quis massa convallis tempus in non turpis. Mauris pretium purus sed lacus euismod, eu cursus massa commodo. Nulla in erat ut ex imperdiet iaculis. Aliquam erat volutpat. Sed pellentesque et neque vitae accumsan. Etiam nec dolor quis est dignissim viverra. Nunc et pulvinar felis. Nulla in varius turpis. Curabitur non diam libero. Nam porttitor orci in metus sagittis</p>
    </div>
  </div>
</section>
*/

