import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import '../styles/projects.scss';

class Project extends React.Component {
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
                <h1>Azel2</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta, tellus ut convallis luctus, lorem diam mattis arcu, eu consequat dui tortor eget lacus. Donec metus ligula, rutrum volutpat neque vel, porta tincidunt dui. Phasellus convallis tristique nunc. Integer nunc nunc, finibus a maximus at, viverra ut lorem. Etiam id velit risus. Vestibulum sapien mauris, fermentum nec luctus nec, fringilla non orci. Nullam blandit porta tincidunt. Donec placerat pretium dapibus. Ut interdum lorem eu nibh tincidunt vulputate. Aenean aliquam gravida quam, vel pulvinar odio. Pellentesque sed feugiat ligula. Quisque sagittis porttitor dui, ac lacinia mauris tempor vel. Donec rutrum lorem id nulla consequat vulputate.</p>
              </div>
            </div>
          </section>
          <section className="band band-b">
            <div className="band-container">
              <div className="band-inner">
                <h1>Poopy Di Scoop</h1>
                <p>Proin sed aliquet tellus. Etiam bibendum ligula in rhoncus imperdiet. Sed a sollicitudin dolor. Integer leo enim, tincidunt vel sagittis vel, vehicula non quam. Nunc mattis bibendum massa vel volutpat. Duis ligula ante, elementum luctus felis ut, ultricies aliquam dolor. Nunc et est mattis, fermentum nisl et, volutpat lacus. Nam ullamcorper urna non odio luctus volutpat. Praesent efficitur in risus at porttitor.</p>
              </div>
            </div>
          </section>
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
        </div>
      </Layout>
    );
  }
}

export default Project

export const pageQuery = graphql`
   query{
    site {
      siteMetadata {
        title
      }
    }
  }
`

