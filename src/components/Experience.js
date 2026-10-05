import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "./Experience.css";

const experiences = [
  {
    number: "01",
    title: "Holistic Wellness & Spa",
    icon: "wellness",
    description:
      "Reconnect body and spirit through ancient healing traditions, open-air aromatherapy pavilions, and customized thermal baths nestled within nature.",
    features: [
      "Ayurvedic & Herbal Therapies",
      "Private Lakefront Yoga Deck",
      "Heated Hydrotherapy Jacuzzi",
      "Natural Botanical Oils & Elixirs",
    ],
  },
  {
    number: "02",
    title: "Artisanal Sunset Dining",
    icon: "dining",
    description:
      "Indulge in farm-to-table gastronomic mastery where seasonal regional ingredients meet world-class culinary finesse beneath starlit skies.",
    features: [
      "Curated Chef's Tasting Menus",
      "Private Lakeside Gazebo Dinners",
      "Extensive Cellar & Wine Pairings",
      "Live Acoustic Twilight Sessions",
    ],
  },
  {
    number: "03",
    title: "Bespoke Curated Excursions",
    icon: "excursions",
    description:
      "Embark on private guided explorations designed specifically around your passions, from sunrise trails to hidden cultural gems.",
    features: [
      "Private Guided Nature Trails",
      "Sunrise & Sunset Expeditions",
      "Curated Cultural Experiences",
      "Personalized Adventure Itineraries",
    ],
  },
  {
    number: "04",
    title: "Private Lakeside Retreats",
    icon: "retreat",
    description:
      "Slow down beside the water with intimate private experiences crafted around quiet moments, natural beauty, and complete relaxation.",
    features: [
      "Private Lakeside Lounges",
      "Sunset Boat Experiences",
      "Personalized Retreat Rituals",
      "Scenic Private Dining",
    ],
  },
];


/* =========================================================
   EXPERIENCE ICON
========================================================= */

const ExperienceIcon = ({ type }) => {
  if (type === "wellness") {
    return (
      <svg
        className="experience-card-icon"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24 5C24 5 14 12 14 22C14 28 18.5 32 24 32C29.5 32 34 28 34 22C34 12 24 5 24 5Z"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M24 15C20.8 15 18.5 17.5 18.5 20.5C18.5 23.5 20.8 26 24 26C27.2 26 29.5 23.5 29.5 20.5C29.5 17.5 27.2 15 24 15Z"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M24 32V42"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M19 39H29"
          stroke="currentColor"
          strokeWidth="1.4"
        />
      </svg>
    );
  }

  if (type === "dining") {
    return (
      <svg
        className="experience-card-icon"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 37H35"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M17 37V29C17 24.5 20.1 21 24 21C27.9 21 31 24.5 31 29V37"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M11 24C11 20 16 17 24 17C32 17 37 20 37 24"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M24 8V17"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M20 10L24 6L28 10"
          stroke="currentColor"
          strokeWidth="1.4"
        />
      </svg>
    );
  }

  if (type === "excursions") {
    return (
      <svg
        className="experience-card-icon"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 34C8 29 13 26 18 26H30C35 26 40 29 40 34"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M12 34H36"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M24 7V26"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M20 12L24 7L28 12"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M15 30L10 36"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M33 30L38 36"
          stroke="currentColor"
          strokeWidth="1.4"
        />
      </svg>
    );
  }

  return (
    <svg
      className="experience-card-icon"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 31C13 25 18 22 24 22C30 22 35 25 40 31"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M13 31C13 36 18 39 24 39C30 39 35 36 35 31"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M24 22V10"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M20 14L24 9L28 14"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
};


const Experience = () => {
  return (
    <section className="experience-section">

      <div className="container experience-container">

        {/* =================================================
            LEFT CONTENT
        ================================================= */}

        <div className="experience-left">

          <div className="experience-intro">

            <span className="experience-eyebrow">
              — THE KING 11 EXPERIENCE —
            </span>

            <h2 className="experience-heading">
              Beyond Your Stay
            </h2>

            <p className="experience-description">
              From rejuvenating wellness rituals to twilight culinary
              journeys, every service point is purposefully crafted to
              awaken your senses.
            </p>

          </div>


          {/* EXPERIENCE NAVIGATION */}

          <div className="experience-navigation">

            {experiences.slice(0, 3).map((experience, index) => (
              <div
                className={`experience-nav-item ${
                  index === 0 ? "active" : ""
                }`}
                key={experience.number}
              >

                <span className="experience-nav-number">
                  {experience.number}
                </span>

                <span className="experience-nav-title">
                  {experience.title}
                </span>

              </div>
            ))}

          </div>


          {/* CTA */}

          <a
            href="#experiences"
            className="experience-cta"
          >
            INQUIRE EXPERIENCES
            <span>→</span>
          </a>

        </div>


        {/* =================================================
            RIGHT CARDS
        ================================================= */}

        <div className="experience-right">

          <Swiper
            modules={[Autoplay]}
            direction="vertical"
            slidesPerView={2}
            slidesPerGroup={1}
            spaceBetween={30}
            speed={900}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            className="experience-swiper"
          >

            {experiences.map((experience) => (
              <SwiperSlide key={experience.number}>

                <article className="experience-card">

                  {/* TOP ROW */}

                  <div className="experience-card-top">

                    <ExperienceIcon
                      type={experience.icon}
                    />

                    <span className="experience-card-number">
                      {experience.number}
                    </span>

                  </div>


                  {/* CARD CONTENT */}

                  <div className="experience-card-body">

                    <h3 className="experience-card-title">
                      {experience.title}
                    </h3>

                    <p className="experience-card-description">
                      {experience.description}
                    </p>

                  </div>


                  {/* CARD FEATURES */}

                  <div className="experience-card-features">

                    {experience.features.map((feature, index) => (
                      <div
                        className="experience-feature"
                        key={index}
                      >
                        <span className="experience-feature-dot"></span>

                        <span className="experience-feature-text">
                          {feature}
                        </span>
                      </div>
                    ))}

                  </div>

                </article>

              </SwiperSlide>
            ))}

          </Swiper>

        </div>

      </div>

    </section>
  );
};

export default Experience;