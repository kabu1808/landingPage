import React from "react";
import { useInView } from "react-intersection-observer";
import "./specs.css";

const Specs = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
    <div id="features" ref={ref}>
      <section className="cource">
        <div
          className={
            inView
              ? "row animate__animated animate__fadeInLeft animate__delay-0.5s"
              : "row"
          }
        >
          <div className="course-col">
            <i className="fa-solid fa-user"></i>
            <h3>Multiple User</h3>
            <p>
              Team11 is very big users Community and Provide Platform to meet
              and play game wth worldwide users
            </p>
          </div>
          <div className="course-col">
            <i className="fa-sharp fa-solid fa-trophy"></i>
            <h3>Daily Games</h3>
            <p>
              games to make real money using your cricketing knowledge. Create
              your dream team, participate in the game, check out the
              leaderboard and win big.
            </p>
          </div>
          <div className="course-col">
            <i className="fa-solid fa-people-group"></i>
            <h3>Multiple Teams</h3>
            <p>
              Team11 is a 1st app of Cricket fantasy where any user can create
              Multiple teams on in the games Create task
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Specs;
