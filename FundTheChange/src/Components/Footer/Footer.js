import React from 'react'
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">


      <div className="footer-links">
      <section className="footerSection1">
            <ul className="">
            <li className="under bye"><a className="under" href="/">Fund The Change</a></li>
              <li className="under bye"><a className="under" href="/about">About</a></li>
              <li className="under bye"><a className="under" href="/generalOrgs">Organizations</a></li>
            </ul>
     </section>

        <section className="footerSection2">
            <ul className="">
            <li className="b"><i class="fas fa-map-marker-alt"></i></li>
              <li>1 Resilient st.</li>
              <li>Boston, MA</li>
              <li>01234</li>

            </ul>
            </section>


        <section className="footerSection4">
            <ul className="">
              <li className="under bye"><a className="under" href="/signup">Sign Up </a></li>
              <li><a className="under bye" href="/login">Log In</a></li>
            </ul>
            </section>

      </div>

      <div>
            <section className="footerSection5">
            <p className="">
              &copy;{new Date().getFullYear()} FundTheChange - ResilientLabs - All Rights Reserved
            </p>
          </section>

      </div>

    </div>









  )
}

export default Footer;
