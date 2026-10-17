import React, { useState } from "react";
import PageBanner from "../components/PageBanner";
import FAQ from "../components/FAQ";

import {
  FaBed,
  FaLeaf,
  FaConciergeBell,
  FaArrowRight,
} from "react-icons/fa";

import "./About.css";


const About = () => {
  /* =========================================
     ABOUT IMAGES
  ========================================= */

  const aboutImages = [
    require("../assets/Reception/DSC05843.JPG"),
    require("../assets/outdoor_wide/DSC05925.JPG"),
    require("../assets/Reception/DSC05932.JPG"),
    require("../assets/Dining/DSC05857.JPG"),
  ];

  /* =========================================
     AMENITIES DATA
  ========================================= */

  const amenitiesData = [
    {
      title: "Luxury Living",
      image: require("../assets/Rooms/DSC05802.JPG"),
      alt: "Luxury living room and suite interior at King 11 Resort",
    },
    {
      title: "Swimming Pool",
      image: require("../assets/outdoor_wide/DSC05925.JPG"),
      alt: "King 11 Resort outdoor swimming pool and recreational area",
    },
    {
      title: "Restaurant",
      image: require("../assets/Dining/DSC05868.JPG"),
      alt: "Fine dining restaurant interior at King 11 Resort with elegant decor",
    },
    {
      title: "Garden",
      image: require("../assets/outdoor_wide/DSC05901.JPG"),
      alt: "Lush green garden and landscaped outdoor area at King 11 Resort",
    },
    {
      title: "Sports & Recreation",
      image: require("../assets/outdoor_wide/kitty2.JPG"),
      alt: "Sports and recreation facilities at King 11 Resort",
    },
  ];

  const [activeStoryImg, setActiveStoryImg] = useState(0);

  return (
    <div className="about-page">

      {/* =========================================
          PAGE BANNER
      ========================================= */}

      <PageBanner
        backgroundImage={require("../assets/outdoor_wide/DJI_20260920170134_0593_D.JPG")}
        title="About Us"
        homeLink="/"
        homeText="Home"
        currentPage="About Us"
      />

      {/* =========================================
          ABOUT STORY SECTION
      ========================================= */}

      <section className="about-section-1">

        <div className="about-section-1-container">

          {/* LEFT IMAGE AREA */}
          <div className="about-section-1-gallery">

            {/* Main Image */}
            <div className="about-section-1-main-image">
              <img
                src={aboutImages[activeStoryImg]}
                alt="Luxury Hotel Experience"
                key={activeStoryImg}
              />
            </div>

            {/* Thumbnail Images */}
            <div className="about-section-1-thumbnails">

              {aboutImages.slice(1).map((image, index) => {
                const imgIndex = index + 1;
                return (
                  <div
                    className={`about-section-1-thumbnail ${
                      activeStoryImg === imgIndex ? "active" : ""
                    }`}
                    key={index}
                    onClick={() => setActiveStoryImg(imgIndex)}
                    role="button"
                    tabIndex={0}
                    aria-label={`View resort image ${imgIndex + 1}`}
                  >
                    <img
                      src={image}
                      alt={`Hotel view ${imgIndex + 1}`}
                    />
                  </div>
                );
              })}

            </div>

          </div>

          {/* RIGHT CONTENT AREA */}
          <div className="about-section-1-content">

            <span className="about-section-1-eyebrow">
              OUR STORY
            </span>

            <h2>
              A Stay Shaped
              <br />
              Around the King's
              <br />
              Experience
            </h2>

            <p className="about-section-1-lead">
              Where timeless luxury, pristine nature, and warm royal hospitality meet to craft unforgettable memories.
            </p>

            <p className="about-section-1-description">
              Built on the belief that true luxury is found in stillness and serenity, King 11 Resort offers a rare harmony between refined comfort and the tranquil beauty of nature. Whether you are here for leisure, family vacations, corporate retreats, or joyous celebrations, every moment is thoughtfully curated to make your stay warm, comfortable, and truly exceptional.
            </p>

            {/* FEATURES */}
            <div className="about-section-1-features">

              {/* Feature 1 */}
              <div className="about-section-1-feature">

                <div className="about-section-1-feature-icon">
                  <FaBed />
                </div>

                <span>
                  Premium
                  <br />
                  Accommodation
                </span>

              </div>

              {/* Feature 2 */}
              <div className="about-section-1-feature">

                <div className="about-section-1-feature-icon">
                  <FaLeaf />
                </div>

                <span>
                  Lush Green
                  <br />
                  Surroundings
                </span>

              </div>

              {/* Feature 3 */}
              <div className="about-section-1-feature">

                <div className="about-section-1-feature-icon">
                  <FaConciergeBell />
                </div>

                <span>
                  Exceptional
                  <br />
                  Hospitality
                </span>

              </div>

            </div>

            {/* BUTTON */}
            <button
              type="button"
              className="about-section-1-button"
            >
              <span>EXPLORE MORE</span>
              <FaArrowRight />
            </button>

          </div>

        </div>

      </section>


      {/* =========================================
          AMENITIES SECTION
      ========================================= */}

      <section className="amenities-section">

        {/* Heading */}
        <div className="amenities-heading">

          <span className="amenities-subtitle">
            DISCOVER MORE
          </span>

          <h2 className="amenities-title">
            Luxury <span>Amenities</span>
          </h2>

          <p className="amenities-description">
            Experience thoughtfully designed spaces, exceptional
            comfort and premium amenities created to make every
            moment memorable.
          </p>

        </div>


        {/* Amenities Gallery */}
        <div className="amenities-gallery">

          {amenitiesData.map((amenity, index) => (

            <div
              className="amenities-item"
              key={index}
            >

              {/* Image */}
              <img
                src={amenity.image}
                alt={amenity.alt || amenity.title}
                className="amenities-image"
              />

              {/* Overlay */}
              <div className="amenities-overlay"></div>


              {/* Content */}
              <div className="amenities-content">

                <span className="amenities-number">
                  0{index + 1}
                </span>

                <h3>
                  {amenity.title}
                </h3>

                <span className="amenities-view">
                  Explore

                  <span className="amenities-arrow">
                    ↗
                  </span>
                </span>

              </div>

            </div>

          ))}

        </div>

      </section>
 <FAQ/>
    </div>

   
  );
};

export default About;