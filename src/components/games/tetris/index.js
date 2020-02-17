import React from 'react'
import P5Wrapper from '../../P5Wrapper'
import TetrisStetch from './sketch'

export default class TetrisSweeper extends React.Component {
  render() {
    return (
      <div>
        <P5Wrapper sketch={TetrisStetch} />
      </div>
    )
  }
}
