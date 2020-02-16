import React, { Component } from "react";
import Loadable from '@loadable/component'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
const TicTacToe = Loadable(() => import('../../components/games/ticTacToe/index'))

class TicTacToeApp extends Component {

  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Kevin Ponce Tic Tac Toe"
             description="Personal blog documenting fun facts, projects and things I have learned"
        />
        <div id="tic-tac-toe">
          <h1>Tic Tac Toe</h1>
          <TicTacToe />
        </div>
      </Layout>
    )
  }
}

export default TicTacToeApp

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
