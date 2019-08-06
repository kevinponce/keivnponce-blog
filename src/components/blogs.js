import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { rhythm } from "../utils/typography"
import '../pages/index.scss'
import Masonry from 'react-masonry-component';
import Image from "gatsby-image"
import PropTypes from "prop-types"
import _ from 'lodash';

const masonryOptions = {
    transitionDuration: 0
};

class Blogs extends React.Component {
  constructor(props) {
    super(props);

    this.renderHeader = this.renderHeader.bind(this);
    this.renderPosts = this.renderPosts.bind(this);
  }
  renderHeader(node) {
    const {
      arduinoIcon,
      gatsbyIcon,
      googleMapsIcon,
      postgresIcon,
      pythonIcon,
      raspberryIcon,
      rubyIcon,
    } = this.props
    const { header } = node.frontmatter;
    let iconImage;

    if (!header) {
      return;
    }

    const { type,  icon, bgColor } = header;
    if (type === 'icon') {
      if (icon === 'gatsby') {
        iconImage = (<Image
          fixed={gatsbyIcon.childImageSharp.fixed}
        />)
      } else if (icon === 'python') {
        iconImage = (<Image
          fixed={pythonIcon.childImageSharp.fixed}
        />)
      } else if (icon === 'ruby') {
        iconImage = (<Image
          fixed={rubyIcon.childImageSharp.fixed}
        />)
      } else if (icon === 'arduino') {
        iconImage = (<Image
          fixed={arduinoIcon.childImageSharp.fixed}
        />)
      } else if (icon === 'raspberry') {
        iconImage = (<Image
          fixed={raspberryIcon.childImageSharp.fixed}
        />)
      } else if (icon === 'postgres') {
        iconImage = (<Image
          fixed={postgresIcon.childImageSharp.fixed}
        />)
      } else if (icon === 'google-maps') {
        iconImage = (<Image
          fixed={googleMapsIcon.childImageSharp.fixed}
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
    const { posts } = this.props;

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
                { 
                  tags.map((tag) => {
                    return(
                      <Link style={{ boxShadow: `none` }} to={`/tags/${tag}`} key={`${node.fields.slug}-${tag}`}>
                        {_.startCase(_.toLower(tag.split('-').join(' ')))}
                      </Link>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      )
    });
  }

  render() {
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = this.props.prefixUrl + (currentPage - 1 === 1 ? '' : (currentPage - 1).toString())
    const nextPage = this.props.prefixUrl + (currentPage + 1).toString()

    return (
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
                  to={`${this.props.prefixUrl}${i === 0 ? '' : i + 1}`}
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
    )
  }
}

Blogs.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
  prefixUrl: PropTypes.string,
  pageContext: PropTypes.object,
  arduinoIcon: PropTypes.object,
  gatsbyIcon: PropTypes.object,
  googleMapsIcon: PropTypes.object,
  postgresIcon: PropTypes.object,
  pythonIcon: PropTypes.object,
  raspberryIcon: PropTypes.object,
  rubyIcon: PropTypes.object,
}

export default Blogs
