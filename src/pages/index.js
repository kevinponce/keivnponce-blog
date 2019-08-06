import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import './index.scss'
import {Helmet} from "react-helmet";
import Masonry from 'react-masonry-component';
import Image from "gatsby-image"

const masonryOptions = {
    transitionDuration: 0
};

class BlogIndex extends React.Component {
  constructor(props) {
    super(props);

    this.renderHeader = this.renderHeader.bind(this);
    this.renderPosts = this.renderPosts.bind(this);
  }
  renderHeader(node) {
    const { data } = this.props
    const { header } = node.frontmatter;
    let iconImage;

    if (!header) {
      return;
    }

    const { type,  icon, bgColor } = header;
    if (type === 'icon') {
      if (icon === 'gatsby') {
        iconImage = (<Image
          fixed={data.gatsbyIcon.childImageSharp.fixed}
        />)
      } else if (icon === 'python') {
        iconImage = (<Image
          fixed={data.pythonIcon.childImageSharp.fixed}
        />)
      } else if (icon === 'ruby') {
        iconImage = (<Image
          fixed={data.rubyIcon.childImageSharp.fixed}
        />)
      } else if (icon === 'arduino') {
        iconImage = (<Image
          fixed={data.arduinoIcon.childImageSharp.fixed}
        />)
      } else if (icon === 'raspberry') {
        iconImage = (<Image
          fixed={data.raspberryIcon.childImageSharp.fixed}
        />)
      } else if (icon === 'postgres') {
        iconImage = (<Image
          fixed={data.postgresIcon.childImageSharp.fixed}
        />)
      } else if (icon === 'google-maps') {
        iconImage = (<Image
          fixed={data.googleMapsIcon.childImageSharp.fixed}
        />)
      }

      if (typeof iconImage !== 'undefined') {
        return (
          <div className="blog-post-header">
            <div className="blog-post-header-no-image" style={{ backgroundColor: bgColor }}>
              {iconImage}
            </div>
          </div>
        )
      }
    }
  }

  renderPosts() {
    const { data } = this.props;
    const posts = data.allMarkdownRemark.edges;

    return posts.map(({ node }) => {
      const title = node.frontmatter.title || node.fields.slug;
      const tags = node.frontmatter.tags || [];

      return (
        <div className="blog-post-wrapper pds-blogs pds-blogs-blogs-card" key={node.fields.slug}>
          <div className="blog-post">
            {this.renderHeader(node)}
            <div className="blog-post-description">
              <Link style={{ boxShadow: `none` }} to={`/blog/${node.fields.slug}`}> {title}</Link>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
              <div className="tags-wrapper">
                { tags.map((tag) => (<a>{tag}</a>)) }
              </div>
            </div>
          </div>
        </div>
      )
    });
  }

  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = '/blogs/' + (currentPage - 1 === 1 ? '' : (currentPage - 1).toString())
    const nextPage = '/blogs/' + (currentPage + 1).toString()

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <div className="blogs-wrapper">
          <Masonry
                className={'my-gallery-class'} // default ''
                elementType={'div'} // default 'div'
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
            >
                {this.renderPosts()}
            </Masonry>
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
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
   query($skip: Int, $limit: Int) {
    site {
      siteMetadata {
        title
      }
    }
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
            tags
            header {
              type
              bgColor
              icon
            }
          }
        }
      }
    }

    gatsbyIcon: file(absolutePath: { regex: "/gatsby-icon.png/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    pythonIcon: file(absolutePath: { regex: "/python-icon.png/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    rubyIcon: file(absolutePath: { regex: "/ruby-icon.png/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    arduinoIcon: file(absolutePath: { regex: "/arduino-icon.png/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    raspberryIcon: file(absolutePath: { regex: "/raspberry-icon.png/" }) {
      childImageSharp {
        fixed(width: 40, height: 55) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    postgresIcon: file(absolutePath: { regex: "/postgres-icon.png/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    googleMapsIcon: file(absolutePath: { regex: "/google-maps-icon.png/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
