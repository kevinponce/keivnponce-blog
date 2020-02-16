import React from 'react'
import P5Wrapper from '../../P5Wrapper'
import MineSweeperStetch from './sketch'

export default class MineSweeper extends React.Component {
  render() {
    return (
      <div>
        <P5Wrapper sketch={MineSweeperStetch} />
      </div>
    )
  }
}
