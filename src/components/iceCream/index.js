/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import './iceCream.scss';

const IceCream = () => {
  return (
    <div className="icecream-container">
      <div className="icecream-body">
        <div className="icecream-body_top"></div>
        <div className="icecream-body_bottom"></div>
        <div className="icecream-bite_first"></div>
        <div className="icecream-bite_second"></div>
        <div className="icecream-body-shadow">
          <div className="icecream-body-shadow_item">
            <div className="icecream-body-shadow_item_top"></div>
            <div className="icecream-body-shadow_item_center"></div>
            <div className="icecream-body-shadow_item_bottom"></div>
          </div>
          <div className="icecream-body-shadow_item">
            <div className="icecream-body-shadow_item_top"></div>
            <div className="icecream-body-shadow_item_center"></div>
            <div className="icecream-body-shadow_item_bottom"></div>
          </div>
        </div>
        <div className="icecream-face">
          <div className="icecream-face-eyes">
            <div></div>
            <div></div>
          </div>
          <div className="icecream-face-mounth">
            <div className="icecream-face-mounth_inner">
              <div className="icecream-face-mounth_tongue"></div>
            </div>
          </div>
        </div>
        <div className="icecream-drops">
          <div className="icecream-drops-second">
            <div className="icecream-drops-second_end"></div>
            <div className="icecream-drops-falling_drop second"></div>
          </div>
          <div className="icecream-drops-first_space">
            <div className="icecream-drops-first_space_end"></div>
          </div>
          <div className="icecream-drops-first">
            <div className="icecream-drops-first_end"></div>
            <div className="icecream-drops-falling_drop first"></div>
          </div>
          <div className="icecream-drops-second_space">
            <div className="icecream-drops-second_space_end"></div>
          </div>
        </div>
      </div>
      <div className="icecream-stick">
        <div className="icecream-stick_shadow"></div>
      </div>
      <div className="icecream-spot"></div>
    </div>
  )
}

export default IceCream
