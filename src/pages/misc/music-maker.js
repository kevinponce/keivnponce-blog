import { graphql } from 'gatsby';
import React, { Component } from 'react';
import Loadable from '@loadable/component'
import Layout from '../../components/layout'
import SEO from '../../components/seo'

const MusicMaker = Loadable(() => import('../../components/misc/musicMaker/index'))

class MusicMakerApp extends Component {

  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Kevin Ponce Music Maker"
             description="Personal blog documenting fun facts, projects and things I have learned"
        />
        <div id="music-maker-wrapper">
          <h1>Music Maker</h1>
          <MusicMaker />
        </div>
      </Layout>
    )
  }
}

export default MusicMakerApp

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
