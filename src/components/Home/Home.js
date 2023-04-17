import React from "react";
import { useInView } from "react-intersection-observer";
import "./home.css";

const Home = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
    <>
      <div
        className={
          inView
            ? "text-box animate__animated animate__fadeIn animate__slow"
            : "text-box"
        }
        ref={ref}
      >
        <h1>Earn Money</h1>
        <p>
          India's Biggest Platform
          <br />
          To Earn Money Online
        </p>
        <div className="download-btn">
          <a href="/">
            <img
              src="https://team11cricket.com/web/images/btn_android.png"
              alt=""
            />
          </a>
          <a href="/">
            <img
              src="https://team11cricket.com/web/images/btn_android.png"
              alt=""
            />
          </a>
        </div>
      </div>
      <div
        className={
          inView
            ? "phone animate__animated animate__fadeInRight animate__delay-0.5s"
            : "phone"
        }
      >
        <img src="	https://team11cricket.com/web/images/hero-1-img.png" alt="" />
      </div>
    </>
  );
};

export default Home;
