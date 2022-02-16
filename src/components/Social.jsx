import React from "react";
import Whatsapp from "../img/whatsapp.png";
import Github from "../img/github.png";
import Linkedin from "../img/linkedin.png";

import "./Social.css";

const Social = () => {
  return (
    <div className="social">
      <a
        href="https://www.linkedin.com/in/palaciosla"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Linkedin} alt="email" />
      </a>
      <a
        href="https://www.github.com/palaciosla"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Github} alt="email" />
      </a>
      <a href="https://wa.me/5491154254481" target="_blank" rel="noreferrer">
        <img src={Whatsapp} alt="email" />
      </a>
      {/* <a href="#form-contact">
                <img src={Email} alt="email" />
            </a> */}
    </div>
  );
};

export default Social;
