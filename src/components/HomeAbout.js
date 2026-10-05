import React from "react";
import "./HomeAbout.css";

import mainAboutVideo from "../assets/video/about_video.MP4";
import smallAboutVideo from "../assets/video/about-small.MP4";

const HomeAbout = () => {
  return (
    <section className="h-about container">
      <div className="h-about-container">

        {/* =========================
            LEFT MEDIA AREA
        ========================= */}
        <div className="h-about-media">

          {/* Main Video */}
          <div className="h-about-main-media">
            <video
              className="h-about-main-video"
              src={mainAboutVideo}
              autoPlay
              muted
              loop
              playsInline
            />
          </div>

          {/* Luxury Badge */}
          <div className="h-about-badge">
            <span className="h-about-badge-number">II</span>
            <span className="h-about-badge-text">
              YEARS OF LUXURY
            </span>
          </div>

          {/* Bottom Right Video */}
          <div className="h-about-small-media">
            <video
              className="h-about-small-video"
              src={smallAboutVideo}
              autoPlay
              muted
              loop
              playsInline
            />
          </div>

        </div>

        {/* =========================
            RIGHT CONTENT
        ========================= */}
        <div className="h-about-content">

          {/* Eyebrow */}
          <div className="h-about-eyebrow">
            <span className="h-about-eyebrow-line"></span>
            <span>OUR STORY</span>
            <span className="h-about-eyebrow-line"></span>
          </div>

          {/* Heading */}
          <h2 className="h-about-heading">
            Where Luxury Meets
            <br />
            Nature
          </h2>

          {/* Intro */}
          <p className="h-about-intro">
            Built on the belief that true luxury is found in stillness,
            King 11 Resort offers a rare harmony between refined comfort
            and the wild beauty of nature.
          </p>

          {/* Description */}
          <p className="h-about-description">
            Since our founding, we have dedicated every stone and suite
            to crafting experiences that go beyond the ordinary. Surrounded
            by pristine landscapes, ancient trees and open skies, King 11
            is not merely a destination — it is a return to the things
            that matter most: rest, beauty, and belonging.
          </p>

          {/* Statistics */}
          <div className="h-about-stats">

            <div className="h-about-stat">
              <span className="h-about-stat-number">500+</span>
              <span className="h-about-stat-label">
                HAPPY GUESTS
              </span>
            </div>

            <div className="h-about-stat">
              <span className="h-about-stat-number">24</span>
              <span className="h-about-stat-label">
                LUXURY SUITES
              </span>
            </div>

            <div className="h-about-stat">
              <span className="h-about-stat-number">4.9</span>
              <span className="h-about-stat-label">
                GUEST RATING
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeAbout;