import React from "react";
import { useInView } from "react-intersection-observer";
import "./play.css";

const Play = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  return (
    <div id="activity" ref={ref}>
      <section className="play">
        <div
          className={
            inView
              ? "play-img animate__animated animate__fadeIn animate__slower"
              : "play-img"
          }
        >
          <img src="https://team11cricket.com/web/images/image-02.png" alt="" />
        </div>
        <div className="info">
          <h1>How To Play</h1>
          <div
            className={
              inView
                ? "animate__animated animate__fadeInLeft animate__duration-2s"
                : ""
            }
          >
            <h2>Select Match</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
          <div
            className={
              inView
                ? "animate__animated animate__fadeInLeft animate__duration-1.5s"
                : ""
            }
          >
            <h2>Select Match</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
          <div
            className={
              inView
                ? "animate__animated animate__fadeInLeft animate__duration-1s"
                : ""
            }
          >
            <h2>Select Match</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
          <div
            className={
              inView
                ? "animate__animated animate__fadeInLeft animate__duration-0.5s"
                : ""
            }
          >
            <h2>Select Match</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Play;
