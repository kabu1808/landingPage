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
            <h1>About Team11</h1>
            <p>
              Team11 is India's first Social Networking Fantasy Mobile
              application.
              <br /> While other fantasy sports mobile applications only allow{" "}
              <br />
              users to earn money by winning games, <br />
              Team11 users can earn money in 3 different ways.
            </p>
            <div>
              <h2>Game Winnings:</h2>
              <p>
                Create own fantasy team for games and win money by just
                <br /> being in top 75%(more than other apps which only reward
                top
                <br /> 50%).
              </p>
            </div>
            <div>
              <h2>Refferal Commission:</h2>
              <p>
                Refer smartphone users to OneTo11 using a unique code. When
                <br />
                referrals participate in paid games, earn 1.5% of their game
                fee.
              </p>
            </div>
            <div>
              <h2>Refferal Income:</h2>
              <p>
                On Team11 users earn from referrals of their referrals. <br />
                Don't miss the chance of earning unlimited income and lifetime
                <br />
                rewards. Join Team11 before your friends and family and start
                <br />
                sharing your unique code.
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
