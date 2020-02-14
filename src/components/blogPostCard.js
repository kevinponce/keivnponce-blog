import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import PropTypes from "prop-types"
import { startCase, toLower, } from 'lodash'

class BlogPostCard extends React.Component {
  constructor(props) {
    super(props);

    this.renderHeader = this.renderHeader.bind(this);
    this.renderDescription = this.renderDescription.bind(this);
  }

  renderHeader() {
    const {
      arduinoIcon,
      gatsbyIcon,
      googleMapsIcon,
      jsIcon,
      postgresIcon,
      pythonIcon,
      raspberryIcon,
      rubyIcon,
      htmlIcon,
      appleIcon,
      databaseIcon,
    } = this.props
    const { header } = this.props;
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
      } else if (icon === 'js') {
        iconImage = (<Image
          fixed={jsIcon.childImageSharp.fixed}
        />)
      } else if (icon === 'html') {
        iconImage = (<Image
          fixed={htmlIcon.childImageSharp.fixed}
        />)
      } else if (icon === 'apple') {
        iconImage = (<Image
          fixed={appleIcon.childImageSharp.fixed}
        />)
      } else if (icon === 'database') {
        iconImage = (<Image
          fixed={databaseIcon.childImageSharp.fixed}
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

  renderDescription() {
    if (this.props.description) {
      return (
        <p
          dangerouslySetInnerHTML={{
            __html: this.props.description
          }}
        />
      );
    }
  }

  render() {
    return (
      <div className="blog-post-wrapper pds-blogs pds-blogs-blogs-card">
        <div className="blog-post">
          {this.renderHeader()}
          <div className="blog-post-description">
            <Link style={{ boxShadow: `none` }} to={this.props.slug}> {this.props.title}</Link>
            {this.renderDescription()}
            <div className="tags-wrapper">
              { 
                (this.props.tags || []).map((tag) => {
                  return(
                    <Link style={{ boxShadow: `none` }} to={`/${tag}`} key={`${this.props.id}-${tag}`}>
                      {startCase(toLower(tag.split('-').join(' ')))}
                    </Link>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

BlogPostCard.propTypes = {
  header: PropTypes.object,
  id: PropTypes.string,
  slug: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  arduinoIcon: PropTypes.object,
  gatsbyIcon: PropTypes.object,
  googleMapsIcon: PropTypes.object,
  jsIcon: PropTypes.object,
  postgresIcon: PropTypes.object,
  pythonIcon: PropTypes.object,
  raspberryIcon: PropTypes.object,
  rubyIcon: PropTypes.object,
  htmlIcon: PropTypes.object,
  appleIcon: PropTypes.object,
  databaseIcon: PropTypes.object,
}

export default BlogPostCard
