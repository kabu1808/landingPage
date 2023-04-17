import React from "react";
import { useInView } from "react-intersection-observer";
import "./details.css";
import "animate.css";

const Details = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
    <div ref={ref}>
      <section className="details">
        <div className="about">
          <div
            className={
              inView ? "dtl animate__animated animate__fadeInLeft" : "dtl"
            }
          >
            <h1>
              Some Detail About Us
              <br />
              Know Who We Are
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <br />
              Voluptatum labore provident laborum consectetur quae! Deleniti
              <br />
              facilis suscipit quisquam provident necessitatibus?
            </p>
            <div>
              <h2>Game Winnings:</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                <br />
                Similique soluta assumenda vero ad alias ipsa?
              </p>
            </div>
            <div>
              <h2>Game Winnings:</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                <br />
                Similique soluta assumenda vero ad alias ipsa?
              </p>
            </div>
            <div>
              <h2>Game Winnings:</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                <br />
                Similique soluta assumenda vero ad alias ipsa?
              </p>
            </div>
          </div>
          <div
            className={
              inView
                ? "dtl-img animate__animated animate__fadeInRight"
                : "dtl-img"
            }
          >
            <img
              src="https://team11cricket.com/web/images/image-02.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Details;
