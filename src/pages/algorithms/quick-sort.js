import { graphql } from 'gatsby';
import React, { Component } from "react";
import Prism from 'prismjs';
import Loadable from '@loadable/component';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
const QuickSort = Loadable(() => import('../../components/algorithms/QuickSort'))

class QuickSortApp extends Component {
  componentDidMount() {
    Prism.highlightAll();
  }

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

const code = `function quickSort(arr, left = 0, right = arr.length - 1) {
  let pivot;
  let partitionIndex;

  if (left < right) {
    pivot = right;
    partitionIndex = partition(arr, pivot, left, right);
    
   //sort left and right
   quickSort(arr, left, partitionIndex - 1)
   quickSort(arr, partitionIndex + 1, right)
  }
  return arr;
}
     
function partition(arr, pivot, left, right) {
  let pivotValue = arr[pivot];
  let partitionIndex = left;

  for (let i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, partitionIndex);

      partitionIndex++;
    }
  }

  swap(arr, right, partitionIndex);

  return partitionIndex;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}`;