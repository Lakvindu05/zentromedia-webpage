import React from "react";
import { Link } from "react-scroll";
import "./Container.css";

export default function Container() {
  return (
    <div className="Container">
      <div className="InfoCard">
        <p id="black">Transforming Possibilities Everyday</p>
        <p id="purple">
          Supercharge Your Business With High-Impact Social Media Advertising. <br />
          Maximise ROI, Skyrocket sales. Unleash Your Business Potential.
        </p>
        <Link
          to="ContactBox"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <button>
            <span className="button-text">Speak To Our Team Today</span>
            <br />
            Schedule Your FREE Audit call Now
          </button>
        </Link>
      </div>
      <img src="2077.png" alt="No1" />
    </div>
  );
}