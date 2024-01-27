import React from "react";
import "./Companies.css";

export default function Companies() {
  return (
    <div className="Companies" id="companies">
      <div className="Companies-text">
        <span>Companies That Trust Us</span>
      </div>
      <div className="Companies-logos">
        <div className="image" id="Viral-Kings">
          <img src="Viral Kings.png" alt="" />
        </div>
        <div className="image" id="Win-Holdings">
          <img src="Win Holdings.png" alt="" />
        </div>
        <div className="image" id="Curestown">
          <img src="Curestown.png" alt="" />
        </div>
        <div className="image" id="LG">
          <img src="LG logo.png" alt="" />
        </div>
        <div className="image" id="Maxceon">
          <img src="Maxceon.png" alt="" />
        </div>
        <div className="image" id="Hustlers-Outlet">
          <img src="Hustlers Outlet.png" alt="" />
        </div>
      </div>
    </div>
  );
}
