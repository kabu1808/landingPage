import React from "react";
import "./footer.css";

const Footer = () => {
  const scrollHandler = (e) => {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <section className="footer">
        <div className="footer-div">
          <div className="footer-content">
            <img src="https://team11cricket.com/web/images/logo.png" alt="" />
            <p>
              Team11 fantasy cricket for free! Use your cricketing knowledge to
              create your <br /> dream team and participate in game. Top
              performers win real cash. Available only
              <br /> on Google Play Store. Download now!
            </p>
          </div>
          <div className="footer-links">
            <a href="/">Facebook</a>
            <a href="/">Twitter</a>
            <a href="/">Instagram</a>
          </div>
        </div>
        {/* <div className="icons">
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-linkedin"></i>
        </div> */}
        <div className="footer-down">
          <p>
            © 2022 Team11 All Rights Reserved <br />
            Design by Creativeinfoway
          </p>
          <div className="footer-nav">
            <ul>
              <li>
                <a href="#header" onClick={scrollHandler}>
                  HOME
                </a>
              </li>
              <li>
                <a href="#activity" onClick={scrollHandler}>
                  HOW TO PLAY
                </a>
              </li>
              <li>
                <a href="#earn" onClick={scrollHandler}>
                  EARN MONEY
                </a>
              </li>
              <li>
                <a href="#screens" onClick={scrollHandler}>
                  SCREENS
                </a>
              </li>
              <li>
                <a href="#download" onClick={scrollHandler}>
                  DOWNLOAD
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
