import { graphql } from 'gatsby';
import React, { Component } from 'react';
import Prism from 'prismjs';
import Loadable from '@loadable/component';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
const BubbleSort = Loadable(() => import('../../components/algorithms/bubbleSort'))

class BubbleSortApp extends Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Kevin Ponce Bubble Sort"
             description="Personal blog documenting fun facts, projects and things I have learned"
        />
        <div>
          <h1>Bubble Sort</h1>
          <div>
            <BubbleSort />
          </div>
          <div>
          <h2>Code</h2>
          <pre>
            <code className="language-javascript">{code}</code>
          </pre>
        </div>
        </div>
      </Layout>
    )
  }
}

export default BubbleSortApp;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const code = `function bubbleSort(ar) {
  for (let i = 0; i < ar.length; i++) {
    for (let j = 0; j < ar.length - 1 - i; j++) {

      if (ar[j]['value'] > ar[j + 1]['value']) {
        swap(ar, j, j + 1);
      }
    }
  }
}

function swap(ar, i, j) {
  const temp = ar[i];

  ar[i] = ar[j];
  ar[j] = temp;
}
`;
