import React from 'react'
import "./Footer.css";
function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/*1 column*/}
          <div className="col-md-3 col-sm-6">
            <h4>LoremIpsum</h4>
            <ul className="list-unstyled">
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
            </ul>
          </div>
            {/*2 column*/}
          <div className="col-md-3 col-sm-6">
            <h4>LoremIpsum</h4>
            <ul className="list-unstyled">
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
            </ul>
          </div>
          {/*third column*/}
          <div className="col-md-3 col-sm-6">
            <h4>LoremIpsum</h4>
            <ul className="list-unstyled">
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
            </ul>
          </div>
          {/*4 column*/}
          <div className="col-md-3 col-sm-6">
            <h4>LoremIpsum</h4>
            <ul className="list-unstyled">
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
            </ul>
          </div>
        </div>
        {/*Footer bottom */}
      </div>
      <div className="footer-bottom bot">
      <p className="text-xs-center">
        &copy;{new Date().getFullYear()} City Guide App - All Rights Reserved
      </p>
      </div>
    </div>
  )
}
export default Footer;
