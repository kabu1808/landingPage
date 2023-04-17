import React from "react";
import "./perks.css";

const Perks = () => {
  return (
    <div id="earn">
      <section className="perks">
        <h1> Earn Money</h1>
        <div className="rows">
          <div className="perks-left">
            <div>
              <h2>Refer Friends</h2>
              <p>
                Invite friend & family to get instant bonus + 10 level
                commission income
              </p>
            </div>
            <div>
              <h2>Daily Bonus</h2>
              <p>Claim your daily bonus</p>
            </div>
            <div>
              <h2>Offers</h2>
              <p>Complete offer to earn bonus</p>
            </div>
          </div>
          <div>
            <img
              src="		https://team11cricket.com/web/images/hero-6-img.png"
              alt=""
            />
          </div>
          <div className="perks-right">
            <div>
              <h2>Article</h2>
              <p>Read article to earn bonus</p>
            </div>

            <div>
              <h2>Watch Video</h2>
              <p>Watch video to earn bonus</p>
            </div>
            <div>
              <h2>Mega Box</h2>
              <p>Claim you mega box to earn bonus</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Perks;
