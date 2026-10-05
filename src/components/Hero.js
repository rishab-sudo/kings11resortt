import React from "react";
import "./Hero.css";

// Change this path to your actual video
import heroVideo from "../assets/video/front_view.MP4";

const Hero = () => {
  return (
    <section className="hero-section">
      {/* Background Video */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Black Overlay */}
      <div className="hero-overlay"></div>

      {/* Center Content */}
      <div className="hero-content">
        <span className="hero-eyebrow">WELCOME TO OUR RETREAT</span>

        <h1 className="hero-heading">
          Experience Comfort.
          <br />
          Discover Serenity.
        </h1>

        <p className="hero-description">
          Escape the ordinary and experience thoughtfully designed spaces,
          exceptional hospitality, and unforgettable moments.
        </p>
      </div>

      {/* Booking Form */}
      <div className="hero-booking-wrapper">
        <form className="hero-booking-form">
          {/* Name */}
          <div className="hero-form-field hero-name-field">
            <label htmlFor="hero-name">NAME</label>
            <input
              id="hero-name"
              type="text"
              placeholder="Your Name"
            />
          </div>

          {/* Email */}
          <div className="hero-form-field hero-email-field">
            <label htmlFor="hero-email">EMAIL</label>
            <input
              id="hero-email"
              type="email"
              placeholder="Your Email"
            />
          </div>

          {/* Room Type */}
          <div className="hero-form-field hero-room-field">
            <label htmlFor="hero-room">ROOM TYPE</label>
            <select id="hero-room" defaultValue="">
              <option value="" disabled>
                Select a room...
              </option>
              <option value="deluxe">Deluxe Room</option>
              <option value="suite">Executive Suite</option>
              <option value="premium">Premium Suite</option>
              <option value="presidential">Presidential Suite</option>
            </select>
          </div>

          {/* Check In */}
          <div className="hero-form-field hero-date-field">
            <label htmlFor="hero-checkin">CHECK IN</label>
            <input
              id="hero-checkin"
              type="date"
            />
          </div>

          {/* Check Out */}
          <div className="hero-form-field hero-date-field">
            <label htmlFor="hero-checkout">CHECK OUT</label>
            <input
              id="hero-checkout"
              type="date"
            />
          </div>

          {/* Adults */}
          <div className="hero-form-field hero-small-field">
            <label htmlFor="hero-adults">ADULTS</label>
            <select id="hero-adults" defaultValue="1">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>

          {/* Children */}
          <div className="hero-form-field hero-small-field">
            <label htmlFor="hero-children">CHILDREN</label>
            <select id="hero-children" defaultValue="0">
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="hero-booking-button"
          >
            REQUEST BOOKING
          </button>
        </form>
      </div>
    </section>
  );
};

export default Hero;