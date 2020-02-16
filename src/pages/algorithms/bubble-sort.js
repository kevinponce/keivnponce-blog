import React, { Component } from "react";
import Loadable from '@loadable/component'
const BubbleSort = Loadable(() => import('../../components/algorithms/bubbleSort'))

export default class BubbleSortApp extends Component {
  render() {
    return (
      <div>
        <BubbleSort />
      </div>
    )
  }
}
