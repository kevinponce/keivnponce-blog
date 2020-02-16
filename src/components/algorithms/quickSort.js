import React from 'react'
import P5Wrapper from '../P5Wrapper'
import QuickSortSketch from './quickSortSketch'

export default class QuickSortApp extends React.Component {
  render() {
    return (
      <div>
        <P5Wrapper sketch={QuickSortSketch} />
      </div>
    )
  }
}
