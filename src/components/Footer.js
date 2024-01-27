import React from "react";
import { Link } from "react-scroll";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footerboxbgimg">
      <div className="FooterBox">
        <p className="Title1">Have A General Inquiry?</p>
        <p className="footer-description1">
          If you have a general inquiry and would like to speak to our expert team,
          <br />
          you can contact us via email at: mediazentro@gmail.com
        </p>
        <Link
          to="ContactBox"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <button>
            <span className="footer-button-text">Speak to our team today</span>
            Schedule your free Audit call
          </button>
        </Link>
        <img src="Footer Zentro Media Logo.png" alt="" />
        <p className="m-num">
          ZENTRO MEDIA Online Service - Company Number +94 71 772 0000
        </p>
        <hr />
        <p className="copyrights">
          ©2023 ZentroMedia. All Rights Reserved
        </p>
      </div>
    </div>
  );
}