import React from 'react'
import P5Wrapper from '../../P5Wrapper'
import FloodFillStetch from './sketch'

export default class FloodFill extends React.Component {
  render() {
    return (
      <div>
        <P5Wrapper sketch={FloodFillStetch} />
      </div>
    )
  }
}
