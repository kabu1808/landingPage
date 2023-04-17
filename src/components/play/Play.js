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
          <img
            src="	https://team11cricket.com/web/images/hero-5-img.png"
            alt=""
          />
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
            <p>
              Choose the match available in the list to participate in a game.
            </p>
          </div>
          <div
            className={
              inView
                ? "animate__animated animate__fadeInLeft animate__duration-1.5s"
                : ""
            }
          >
            <h2>Create Team</h2>
            <p>Create a team by selecting 11 players by using 100 credits..</p>
          </div>
          <div
            className={
              inView
                ? "animate__animated animate__fadeInLeft animate__duration-1s"
                : ""
            }
          >
            <h2>Join Game</h2>
            <p>Enter a game with the created team by paying a game fee.</p>
          </div>
          <div
            className={
              inView
                ? "animate__animated animate__fadeInLeft animate__duration-0.5s"
                : ""
            }
          >
            <h2>Win Prize & Earn Commission</h2>
            <p>
              Win prize money based on the team's performance along with
              commissions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Play;
