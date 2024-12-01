import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  // return (
  //   <Fade bottom duration={1000} distance="40px">
  //     <div className="greet-main" id="greeting">
  //       <div className="greeting-main">
  //         <div className="greeting-text-div">
  //         <div
  //           style={{
  //             backgroundImage: `url(${require("../../assets/images/NR.png")})`, // Image background
  //             backgroundSize: "cover", // Ensures the image covers the entire area
  //             backgroundPosition: "center", // Centers the image
  //             backgroundRepeat: "no-repeat", // Prevents tiling
  //             padding: "20px", // Spacing inside the container
  //             color: isDark ? "white" : "black", // Ensures text remains readable
  //           }}
  //         >
  //           <h1
  //             className={isDark ? "dark-mode greeting-text" : "greeting-text"}
  //             style={{ fontSize: "3rem", marginBottom: "10px" }}
  //           >
  //               {" "}
  //               {greeting.title}{" "}
  //             </h1>
  //             <p
  //               className={
  //                 isDark
  //                   ? "dark-mode greeting-text-p"
  //                   : "greeting-text-p subTitle"
  //               }
  //             >
  //               {greeting.subTitle}
  //             </p>
  //             <div id="resume" className="empty-div"></div>
  //             <SocialMedia />
  //             <div className="button-greeting-div">
  //               <Button text="Contact me" href="#contact" />
  //               {greeting.resumeLink && (
  //                 <a
  //                   href={require("./resume.pdf")}
  //                   download="Resume.pdf"
  //                   className="download-link-button"
  //                 >
  //                 </a>
  //               )}
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </Fade>
  // );
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            {/* Background with dimming effect */}
            <div
              style={{
                position: "relative", // Enable overlay stacking
                padding: "20px", // Add spacing around the content
                borderRadius: "10px", // Optional rounded corners
                color: isDark ? "white" : "black", // Ensure text contrast
              }}
            >
              {/* Background Image */}
              <div
                style={{
                  backgroundImage: `url(${require("../../assets/images/NR.png")})`, // Image source
                  backgroundSize: "cover", // Cover the container
                  backgroundPosition: "left", // Center the image
                  backgroundRepeat: "no-repeat", // Prevent tiling
                  filter: "brightness(30%)", // Dim the image
                  position: "absolute", // Overlay positioning
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  borderRadius: "10px", // Match container corners
                  zIndex: 0, // Ensure it stays behind the text
                }}
              ></div>
  
              {/* Text Content */}
              <div style={{ position: "relative", zIndex: 1 }}>
                <h1

                  style={{ fontSize: "3rem", marginBottom: "10px" }}
                >
                  {greeting.title}
                </h1>
                <p

                  style={{ fontSize: "1.5rem" }}
                >
                  {greeting.subTitle}
                </p>
                <div id="resume" className="empty-div"></div>
                <div className="button-greeting-div">
                  {/* <Button text="Contact me" href="#contact" /> */}
                  {greeting.resumeLink && (
                  <></>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
