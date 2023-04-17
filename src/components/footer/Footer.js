import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <section className="footer">
        <h4>Unique Tech</h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id iste
          alias,
          <br />
          libero voluptatem tempora suscipit velit. Ducimus tempora dignissimos
          unde!
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
