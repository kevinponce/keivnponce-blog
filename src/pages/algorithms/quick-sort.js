import React, { Component } from "react";
import Loadable from '@loadable/component';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
const QuickSort = Loadable(() => import('../../components/algorithms/QuickSort'))

class QuickSortApp extends Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Kevin Ponce Quick Sort"
             description="Personal blog documenting fun facts, projects and things I have learned"
        />
        <div>
          <h1>Quick Sort</h1>
          <QuickSort />
        </div>
      </Layout>
    )
  }
}

export default QuickSortApp;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

