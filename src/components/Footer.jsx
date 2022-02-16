import React from "react";
import Logo from "./Logo";
import Social from "./Social";

import "./Footer.css";

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="by">
          <h3>Desgined by</h3>
          <Logo />
          <h3>{year}</h3>
        </div>
        <Social />
      </div>
    </footer>
  );
};

export default Footer;
