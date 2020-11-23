import { graphql } from 'gatsby';
import React, { Component } from "react";
import Prism from 'prismjs';
import Loadable from '@loadable/component';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
const FloodFill = Loadable(() => import('../../components/algorithms/floodFill'));

class FloodFillApp extends Component {
  componentDidMount() {
    Prism.highlightAll();
  }

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
        <div>
          <h2>Code</h2>
          <pre>
            <code className="language-javascript">{code}</code>
          </pre>
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

const code = `function floodFill(ar, x, y) {
  if (y < 0 || ar.length <= y) return false;
  if (x < 0 || ar[y].length <= x) return false;
  if (ar[y][x].touched) return true;
  if (ar[y][x].island) return true;

  ar[y][x].touchCell();

  floodFill(ar, x, y - 1);
  floodFill(ar, x, y + 1);
  floodFill(ar, x - 1, y);
  floodFill(ar, x + 1, y);
}
`;
