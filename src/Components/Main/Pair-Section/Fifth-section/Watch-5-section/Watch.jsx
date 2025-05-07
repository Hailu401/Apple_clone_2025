import React from 'react'
import watch_5 from "../../../../../commonResource/images/icons/watch-series5-logo.png"
const Watch = () => {
  return (
    <>
      <div className="right-side-wrapper col-sm-12 col-md-6">
        <div className="right-side-container">
          <div className="top-logo-wrapper">
            <div className="logo-wrapper">
              <img src={watch_5} />
            </div>
          </div>
          <div className="description-wraper">
            With the Always-On Retina display.
            <br />
            You’ve never seen a watch like this.
          </div>
          <div className="links-wrapper">
            <ul>
              <li>
                <a href="">Learn more</a>
              </li>
              <li>
                <a href="">Buy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Watch;
