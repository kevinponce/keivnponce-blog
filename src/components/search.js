import { Link } from "gatsby"
import React, { Component } from "react"
import Masonry from 'react-masonry-component';
import { Index } from "elasticlunr"
import BlogPostCard from './blogPostCard'

const masonryOptions = {
  transitionDuration: 0
};

// Search component
export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ``,
      results: [],
    }
  }

  render() {
    return (
      <div className="search-wrapper">
        <h2>Search</h2>
        <input type="text" value={this.state.query} onChange={this.search} placeholder="What do you need help with?"/>
        <div className="blogs-wrapper">
          <Masonry className={'my-gallery-class'} // default ''
                   elementType={'div'} // default 'div'
                   options={masonryOptions} // default {}
                   disableImagesLoaded={false} // default false
                   updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
          >
            {this.state.results.map(page => (
              <BlogPostCard
                key={page.id}
                header={page.header}
                slug={`/blog/${page.slug}`}
                description={page.description || page.excerpt}
                title={page.title}
                tags={page.tags}
                id={page.id}
                node={page}
                arduinoIcon={this.props.arduinoIcon}
                gatsbyIcon={this.props.gatsbyIcon}
                googleMapsIcon={this.props.googleMapsIcon}
                jsIcon={this.props.jsIcon}
                postgresIcon={this.props.postgresIcon}
                pythonIcon={this.props.pythonIcon}
                raspberryIcon={this.props.raspberryIcon}
                rubyIcon={this.props.rubyIcon}
                htmlIcon={this.props.htmlIcon}
                appleIcon={this.props.appleIcon}
              />
            ))}
          </Masonry>
        </div>
      </div>
    )
  }
  getOrCreateIndex = () =>
    this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
        Index.load(this.props.searchIndex)

  search = evt => {
    const query = evt.target.value
    this.index = this.getOrCreateIndex()
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        .search(query, {})
        // Map over each ID and return the full document
        .map(({ ref }) => this.index.documentStore.getDoc(ref)),
    })
  }
}
