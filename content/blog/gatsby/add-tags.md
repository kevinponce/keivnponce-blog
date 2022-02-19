---
title: Add Tags to Gatsby
date: "2019-08-06T22:12:00.121Z"
tags: ["javascript", "gatsby"]
header: { type: 'icon', bgColor: '#663399', icon: 'gatsby' }
description: Tutorial on how to add tags to a blog post so you can group post by category.
---
Update graphql query that gets all of the blogs posts to get `tags` under `edges.node.frontmatter` like so:
```javascript
// gatsby-node.js
const result = await graphql(
  `
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              tags
            }
          }
        }
      }
    }
  `
)
```

First you need to gather all of the uniq tags and then iterate through tags and create page.
When you create the page you need to pass the tag into the page context.
In the example below, we are also passing pagination.
```javascript
// gatsby-node.js
// TOP of the file
const _ = require("lodash")

// the rest of the code is inside of: exports.createPages = async ({ graphql, actions }) => {
const tags = _.reduce(result.data.allMarkdownRemark.edges, (results, edge) => {
  const tags = _.get(edge, "node.frontmatter.tags");
  if (tags) {
    _.each(tags, tag => {
      if(!results[tag]) {
        results[tag] = 0;
      }

      results[tag] += 1
    })
  }

  return results;
}, {});

Object.keys(tags).forEach(tag => {
  const tagNumPages = Math.ceil(tags[tag] / postsPerPage);

  Array.from({ length: tagNumPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/tags/${tag}` : `/tags/${tag}/${i + 1}`,
      component: path.resolve("./src/templates/tags.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages: tagNumPages,
        currentPage: i + 1,
        tag,
      },
    })
  })
})
```

The last part is to create the tags template which can be found below:
```javascript
// src/templates/tags.js
import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"

class Tags extends React.Component {
  render() {
    const { data, pageContext } = this.props
    const posts = data.allMarkdownRemark.edges;
    const { currentPage, numPages, tag } = pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = `/tags/${tag}${(currentPage - 1 === 1 ? '' : (currentPage - 1).toString())}`;
    const nextPage = `/tags/${tag}${(currentPage + 1).toString()}`;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <div>
          {posts.forEach(node => {
            return (<div key={node.fields.slug}>{node.frontmatter.title}</div>)
          })}
        </div>
        <ul
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              listStyle: 'none',
              padding: 0,
            }}
          >
            {!isFirst && (
              <Link to={prevPage} rel="prev">
                ← Previous Page
              </Link>
            )}
            {Array.from({ length: numPages }, (_, i) => (
              <li
                key={`pagination-number${i + 1}`}
                style={{
                  margin: 0,
                }}
              >
                <Link
                  to={`/tags/${tag}/${i === 0 ? '' : i + 1}`}
                  style={{
                    padding: rhythm(1 / 4),
                    textDecoration: 'none',
                    color: i + 1 === currentPage ? '#ffffff' : '',
                    background: i + 1 === currentPage ? '#007acc' : '',
                  }}
                >
                  {i + 1}
                </Link>
              </li>
            ))}
            {!isLast && (
              <Link to={nextPage} rel="next">
                Next Page →
              </Link>
            )}
          </ul>
      </Layout>
    )
  }
}

export default Tags

export const pageQuery = graphql`
   query($skip: Int, $limit: Int, $tag: String) {
    allMarkdownRemark(
      filter: { frontmatter: { tags: { in: [$tag] } } }
      sort: { fields: [frontmatter___date], order: DESC },
      limit: $limit,
      skip: $skip
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
          }
        }
      }
    }
  }
`
```