import React from 'react'
import P5Wrapper from '../../components/P5Wrapper'
import Sketch from './sketch'

export default class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <P5Wrapper sketch={Sketch} />
      </div>
    )
  }
}
