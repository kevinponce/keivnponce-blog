import { graphql } from 'gatsby';
import React, { Component } from "react";
import Prism from 'prismjs';
import Loadable from '@loadable/component';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
const Permutation = Loadable(() => import('../../components/algorithms/perm/index'))

class PermApp extends Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Kevin Ponce Permutation"
             description="Personal blog documenting fun facts, projects and things I have learned"
        />
        <div>
          <h1>Permutation</h1>
          <Permutation />
        </div>
        <div>
          <h2>Javascript Code</h2>
          <pre>
            <code className="language-javascript">{jsCode}</code>
          </pre>
        </div>

        <div>
          <h2>Ruby Code</h2>
          <pre>
            <code className="language-ruby">{rubyCode}</code>
          </pre>
        </div>
      </Layout>
    )
  }
}

export default PermApp;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const rubyCode = `def perm(ar, l = 0, r = ar.length - 1, opts = [])
  if l == r
    opts.push(ar.dup)
  end

  (l..r).each do |i|
    ar[l], ar[i] = ar[i], ar[l]
    perm(ar, l + 1, r, opts)
    ar[i], ar[l] = ar[l], ar[i]
  end

  opts
end`;

const jsCode = `function perm(ar, l = 0, r = ar.length - 1, opts = []) {
  if (l === r) {
    opts.push(ar);
  }

  for (let i = l; i <= r; i++) {
    swap(ar, i, l)
    perm(ar.slice(0), l + 1, r, opts)
    swap(ar, l, i)
  }

  return opts;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}`;