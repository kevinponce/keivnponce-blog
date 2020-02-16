import React, { Component } from "react";
import Loadable from '@loadable/component'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
const MineSweeper = Loadable(() => import('../../components/games/mineSweeper/index'))

class MineSweeperApp extends Component {

  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Kevin Ponce Tic Tac Toe"
             description="Personal blog documenting fun facts, projects and things I have learned"
        />
        <div id="tic-tac-toe">
          <h1>Mine Sweeper</h1>
          <MineSweeper />
        </div>
      </Layout>
    )
  }
}

export default MineSweeperApp

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
