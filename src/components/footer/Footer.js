import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <section className="footer">
        <img src="https://team11cricket.com/web/images/logo.png" alt="" />
        <p>
          Team11 fantasy cricket for free! Use your cricketing knowledge to
          create your <br /> dream team and participate in game. Top performers
          win real cash. Available only
          <br /> on Google Play Store. Download now!
        </p>
        <div className="icons">
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-linkedin"></i>
        </div>
        <p>
          MADE WITH <i className="fa-brands fa-react"></i> ReactJS
        </p>
      </section>
    </div>
  );
};

export default Footer;
