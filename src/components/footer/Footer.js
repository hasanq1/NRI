import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const { isDark } = useContext(StyleContext);

  return (
    <Fade bottom duration={1000} distance="5px">
      <hr></hr>
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("© 2024 Nebulous Research Inc. All rights reserved.")}
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Rapidly developed by the Nebulous Research team.
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          <a
            href="https://www.nebulousresearch.com"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none", color: isDark ? "#ffffff" : "#000000" }}
          >
            
          </a>
        </p>
      </div>
    </Fade>
  );
}