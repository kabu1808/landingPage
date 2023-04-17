import React, { useEffect, useState } from "react";
import "./navbar.css";
import Home from "../Home/Home";
import whiteN from "../../images/whiteN.png";
import blackN from "../../images/blackN.png";

const Navbar = () => {
  const scrollHandler = (e) => {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  };
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);
  return (
    <div className="header" id="header">
      <nav className={scrolled ? "navbar scrolled" : "navbar"}>
        <div>
          <img src={scrolled ? blackN : whiteN} alt="1234" />
        </div>
        <div
          className={scrolled ? "nav-links scrolled" : "nav-links"}
          id="navLinks"
        >
          <i className="fa fa-times" /*onClick={hideMenu()}*/></i>
          <ul>
            <li>
              <a href="#header" onClick={scrollHandler}>
                HOME
              </a>
            </li>
            <li>
              <a href="#activity" onClick={scrollHandler}>
                ACTIVITY
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
        <i className="fa fa-bars" /*onClick={showMenu()}*/></i>
      </nav>
      <Home />
    </div>
  );
};

export default Navbar;
