import React, { Component } from "react";
import Loadable from '@loadable/component'
const QuickSort = Loadable(() => import('../../components/algorithms/QuickSort'))

export default class QuickSortApp extends Component {
  render() {
    return (
      <div>
        <QuickSort />
      </div>
    )
  }
}
