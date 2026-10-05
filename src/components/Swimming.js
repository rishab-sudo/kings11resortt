import React from "react";
import "./Swimming.css";

const Swimming = () => {
  return (
    <section className="swimming-section">

      {/* LEFT - SWIMMING IMAGE */}
      <div className="swimming-image">
        <img
          src={require("../assets/garden.png")}
          alt="Swimming Pool"
        />
      </div>

      {/* RIGHT - SWIMMING CONTENT */}
      <div className="swimming-content">
        <div className="swimming-content-inner">

          <span className="swimming-eyebrow">
            — SWIMMING POOL —
          </span>

          <h2>
            Relax & Rejuvenate
            <br />
            by the Pool
          </h2>

          <p className="swimming-description">
            Dive into tranquility at our beautifully designed swimming pool.
            Surrounded by lush landscapes and comfortable lounging areas,
            it is the perfect place to unwind, refresh and enjoy your stay.
          </p>

          <div className="swimming-features">

            <div className="swimming-feature">
              <span className="swimming-feature-icon">♒</span>
              <span>
                Spacious
                <br />
                Pool Area
              </span>
            </div>

            <div className="swimming-feature">
              <span className="swimming-feature-icon">☼</span>
              <span>
                Comfortable
                <br />
                Lounge Setting
              </span>
            </div>

            <div className="swimming-feature">
              <span className="swimming-feature-icon">≋</span>
              <span>
                Clean & Well
                <br />
                Maintained
              </span>
            </div>

          </div>

          <button className="swimming-button">
            EXPLORE FACILITIES
            <span>→</span>
          </button>

        </div>
      </div>

    </section>
  );
};

export default Swimming;