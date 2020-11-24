import React from 'react'
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/*1 column*/}
          <div className="col-md-3 col-sm-6">
            <h6>FundTheChange</h6>
            <ul className="list-unstyled">
              <li className="under"><a href="#">FAQs</a></li>
              <li className="under"><a href="#">Volunteer</a></li>
              <li className="under"><a href="#">About</a></li>
              <li className="under"><a href="#">Org Sign-Up</a></li>
            </ul>
          </div>
            {/*2 column*/}
          <div className="col-md-3 col-sm-6">
            <ul className="list-unstyled">
            <li className="boo"><i class="fas fa-map-marker-alt"></i></li>
              <li>1 Resilient st.</li>
              <li>Boston, MA</li>
              <li>01234</li>

            </ul>
          </div>
          {/*third column*/}
          <div className="col-md-3 col-sm-6">
            <ul className="list-unstyled">
              <li className="under">Contact us</li>
              <li className="under"><a className="under" href="#"><i class="fab fa-instagram"></i></a></li>
              <li className="under"><a className="under" href="#"><i class="fab fa-facebook-f"></i></a></li>
              <li className="under"><a className="under" href="#"><i class="fab fa-twitter"></i></a></li>
            </ul>
          </div>
          {/*4 column*/}
          <div className="col-md-3 col-sm-6">
            <ul className="list-unstyled">
              <li className="under"><a className="under" href="#">Legal Stuff</a></li>
              <li className="under"><a className="under" href="#">Privacy Policy  </a></li>
              <li><a className="under" href="#">Terms Of Use</a></li>
            </ul>
          </div>
        </div>
        {/*Footer bottom */}

      </div>
      <div className="footer-bottom bot">
      <p className="text-xs-center">
        &copy;{new Date().getFullYear()} FundTheChange - ResilientLabs - All Rights Reserved
      </p>
      </div>
    </div>

  )
}

export default Footer;
