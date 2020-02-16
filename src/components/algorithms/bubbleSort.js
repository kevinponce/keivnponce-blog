import React from 'react'
import P5Wrapper from '../P5Wrapper'
import BubbleSortStetch from './bubbleSortStetch'

export default class BubbleSort extends React.Component {
  render() {
    return (
      <div>
        <P5Wrapper sketch={BubbleSortStetch} />
      </div>
    )
  }
}
