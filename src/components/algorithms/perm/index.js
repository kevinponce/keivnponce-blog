import React from 'react'
import P5Wrapper from '../../P5Wrapper'
import PermStetch from './sketch'

export default class Perm extends React.Component {
  render() {
    return (
      <div>
        <P5Wrapper sketch={PermStetch} />
      </div>
    )
  }
}
