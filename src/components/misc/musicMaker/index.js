import React from 'react'
import P5Wrapper from '../../P5Wrapper'
import MusicMakerStetch from './sketch'

export default class MusicMakerApp extends React.Component {
  render() {
    return (
      <P5Wrapper sketch={MusicMakerStetch} />
    )
  }
}
