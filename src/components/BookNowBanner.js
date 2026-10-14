import React from "react";
import { Link } from "react-router-dom";
import "./BookNowBanner.css";

const BookNowBanner = () => {
  return (
    <section className="booknow-banner">
      <div className="booknow-banner__quote-mark">“</div>

      <div className="booknow-banner__container">
        <div className="booknow-banner__content">
          <p className="booknow-banner__quote">
            "Luxury stays, unforgettable moments, and the true
            <br className="booknow-banner__desktop-break" />
            <span>spirit of </span>
            <em>King 11.</em>"
          </p>
        </div>

        <div className="booknow-banner__action">
          <Link to="/contact" className="booknow-banner__button">
            <span>BOOK NOW</span>
            <span className="booknow-banner__arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BookNowBanner;