import React from 'react'
import P5Wrapper from '../../P5Wrapper'
import TicTacToeStetch from './sketch'

export default class TicTacToe extends React.Component {
  render() {
    return (
      <div>
        <P5Wrapper sketch={TicTacToeStetch} />
      </div>
    )
  }
}
