import React from "react";
import "./review.css";
import user1 from "../../images/user1.jpg";
import user2 from "../../images/user2.jpg";

const Review = () => {
  return (
    <div id="reviews">
      <section className="testimonials">
        <h1>What Our Users Says</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem, expedita?
        </p>

        <div className="row">
          <div className="testimonial-col">
            <img src={user1} alt="error" />
            <div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam
                odio quaerat obcaecati facilis eligendi aperiam corrupti
                repellat velit, nisi minima?
              </p>
              <h3>Lily Aldrean</h3>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
          </div>
          <div className="testimonial-col">
            <img src={user2} alt="error" />
            <div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam
                odio quaerat obcaecati facilis eligendi aperiam corrupti
                repellat velit, nisi minima?
              </p>
              <h3>Barney Stinson</h3>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half"></i>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Review;
