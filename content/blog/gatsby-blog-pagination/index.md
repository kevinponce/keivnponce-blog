---
title: Gatsby blog pagination
date: "2019-08-05T22:12:00.121Z"
tags: ["JavaScript", "Gatsby"]
header: { type: 'icon', bgColor: '#663399', icon: 'gatsby' }
---

Pagination to gatsby was a little weird. Hopefully this is some what helpful

Update `gatsby-node.js` to look like the following:
Make sure you restart develop server for this to work.
Also make sure you update createPage to use the correct component.
I kept the files to match the starter blog provded by gatsby.
```javascript
// gatsby-node.js
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
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
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges
  const postsPerPage = 10
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blogs` : `/blogs/${i + 1}`,
      component: path.resolve("./src/pages/index.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: `/blog${post.node.fields.slug}`,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })
}
```

Add pagination to blogs page.
```javascript
export const pageQuery = graphql`
   query($skip: Int, $limit: Int) {
    allMarkdownRemark(
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
          }
        }
      }
    }
  }
`
```

Add Pagination details to blogs page by doing the following:
```javascript
render() {
  const { currentPage, numPages } = this.props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = '/blogs/' + (currentPage - 1 === 1 ? '' : (currentPage - 1).toString())
  const nextPage = '/blogs/' + (currentPage + 1).toString()

  return (
    <Layout>
      <div>Posts go here</div>
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
              to={`/blogs/${i === 0 ? '' : i + 1}`}
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
```
