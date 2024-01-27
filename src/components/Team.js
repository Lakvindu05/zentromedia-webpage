import React from "react";
import { Link } from "react-scroll";
import "./Team.css";

export default function Footer() {
  return (
    <div className="wrapper" id="team">
      <div className="members">
        <div className="row 1">
          <div className="team-members">
            <img src="Ryan.jpg" alt="Ryan Gunatilake" />
            <h4>Ryan Gunatilake</h4>
            <p>FOUNDER</p>
          </div>
          <div className="team-members">
            <img src="Unknown.jpg" alt="pic" />
            <h4>Member 03</h4>
            <p>CHIEF MARKETING <br />
              OFFICER</p>
          </div>
        </div>
        <div className="row 2">
          <div className="team-members">
            <img src="Nethsara.jpg" alt="Nethsara Perera" />
            <h4>Nethsara Perera</h4>
            <p>CO-FOUNDER</p>
          </div>
          <div className="team-members">
            <img src="Unknown.jpg" alt="pic" />
            <h4>Member 04</h4>
            <p>PERFORMANCE <br />
              MARKETER
            </p>
          </div>
        </div>
      </div>
      <div className="laka">
        <h2>Meet The A-Team</h2>
        <p className="team-text">
          Founded by Ryan Gunatilake, who has dedicated the last two years to sourcing exceptional talent from around the world, the company was established.
        </p>
        <p className="team-text">
          With our elusive company culture and the caliber of clientele we serve, Zentro Media has the advantage of selecting the finest talent worldwide. The team standing before you is a testament to our success in attracting exceptional individuals.
        </p>
        <Link
          to="ContactBox" // Replace "ContactBox" with the ID of the section you want to scroll to
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <button>
            <span className="button-text">Speak To Our Team Today</span>
            <br />
            Schedule Your FREE Audit Call Now
          </button>
        </Link>
      </div>
    </div>
  );
}