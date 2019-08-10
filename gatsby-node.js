const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const _ = require("lodash")

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
                tags
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
      component: path.resolve("./src/templates/blogs.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })

  // Tags
  const tags = _.reduce(posts, (results, edge) => {
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

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
