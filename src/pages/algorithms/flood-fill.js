import React, { Component } from "react";
import Loadable from '@loadable/component';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
const FloodFill = Loadable(() => import('../../components/algorithms/floodFill'));

class FloodFillApp extends Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Kevin Ponce Flood Fill"
             description="Personal blog documenting fun facts, projects and things I have learned"
        />
        <div>
          <h1>Flood Fill</h1>
          <FloodFill />
        </div>
      </Layout>
    )
  }
}

export default FloodFillApp

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
