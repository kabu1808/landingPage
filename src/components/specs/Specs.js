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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Veritatis aliquam et distinctio odio quidem commodi, expedita eos
              tenetur suscipit? Explicabo quod voluptas sit quis doloremque non
              delectus exercitationem quo autem!
            </p>
          </div>
          <div className="course-col">
            <i className="fa-sharp fa-solid fa-trophy"></i>
            <h3>Daily Games</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Veritatis aliquam et distinctio odio quidem commodi, expedita eos
              tenetur suscipit? Explicabo quod voluptas sit quis doloremque non
              delectus exercitationem quo autem!
            </p>
          </div>
          <div className="course-col">
            <i className="fa-solid fa-people-group"></i>
            <h3>Multiple Teams</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Veritatis aliquam et distinctio odio quidem commodi, expedita eos
              tenetur suscipit? Explicabo quod voluptas sit quis doloremque non
              delectus exercitationem quo autem!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Specs;
