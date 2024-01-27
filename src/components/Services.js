import React from "react";
import "./Services.css";
import { Link } from "react-scroll";

export default function Revenue() {
  return (
    <div className="servicesbox" id="services">
      <div className="servicesboxleft">
        <p>
          What We Offer <br />
          <span className="serviestitle2">PAID ADVERTISING</span>
        </p>

        <p className="serviestitle3">Ads. Nothing but ads.</p>
        <p className="servies-description">
          Focused. Exceptional. Effective.
          <br />
          We specialize. Our laser-like focus sets us apart, enabling us to outperform all others. Seeking an agency that offers a one-size-fits-all approach? That's not us. We're here to make a true impact, not just provide an array of services that won't move the needle forward.
          <br />
          <br />
          However, if you're looking for an agency that provides clear,
          immediate access to vital data - expenditure, revenue, and net profit
          - all just two clicks away, then we're the perfect match for you.
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

      <div className="servicesboxright">
        <p>
          MASTERY DEMANDS FOCUS SO....
          <br />
          <span className="serviestitle4">
            We don't offer any other services <br /> except for paid
            advertising...
          </span>
        </p>
        <div className="serviceContainer">
          <ul>
            <div>
              <img src="redcross.png" alt="" />
              <li>WEB DESIGN</li>
            </div>
            <div>
              <img src="redcross.png" alt="" />
              <li>CONTENT CREATION</li>
            </div>
            <div>
              <img src="redcross.png" alt="" />
              <li>EMAIL MARKETING</li>
            </div>
            <div>
              <img src="redcross.png" alt="" />
              <li>SOCIAL MEDIA MANAGEMENT</li>
            </div>
            <div>
              <img src="redcross.png" alt="" />
              <li>INSTAGRAM GROWTH</li>
            </div>
            <div>
              <img src="redcross.png" alt="" />
              <li>PR SERVICE</li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}