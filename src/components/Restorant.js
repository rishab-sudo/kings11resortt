import React from "react";
import "./Restorant.css";

const Restorant = () => {
  return (
    <section className="restaurant-section">

      {/* LEFT - RESTAURANT CONTENT */}
      <div className="restaurant-content">
        <div className="restaurant-content-inner">

          <span className="restaurant-eyebrow">
            — RESTAURANT —
          </span>

          <h2>
            Dine, Relax
            <br />
            & Savour
          </h2>

          <p className="restaurant-description">
            Experience a delightful dining journey with carefully crafted
            cuisine, elegant surroundings, and warm hospitality. Every dish
            is prepared with passion to make your stay truly memorable.
          </p>

          <div className="restaurant-features">

            <div className="restaurant-feature">
              <span className="feature-icon">♨</span>
              <span>
                Delicious
                <br />
                Cuisine
              </span>
            </div>

            <div className="restaurant-feature">
              <span className="feature-icon">☼</span>
              <span>
                Elegant
                <br />
                Ambience
              </span>
            </div>

            <div className="restaurant-feature">
              <span className="feature-icon">≋</span>
              <span>
                Premium
                <br />
                Dining
              </span>
            </div>

          </div>

          <button className="restaurant-button">
            EXPLORE RESTAURANT
            <span>→</span>
          </button>

        </div>
      </div>

      {/* RIGHT - IMAGE */}
      <div className="restaurant-image">
        <img
          src={require("../assets/Dining/DSC05862.JPG")}
          alt="King 11 Resort restaurant dining area with elegant table settings and warm ambiance"
        />
      </div>

    </section>
  );
};

export default Restorant;