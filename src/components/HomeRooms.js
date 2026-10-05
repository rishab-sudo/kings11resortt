import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "./HomeRooms.css";


const roomsData = [
  {
    image: require("../assets/room1.png"),
    title: "Royal Heritage Suite",
    details: "92M² • KING BED • 4 GUESTS",
    description:
      "Spacious master suite with artisanal wood framing, plush lounge seating, and panoramic lake views from your private balcony.",
  },
  {
    image: require("../assets/room1.png"),
    title: "Garden Panorama Villa",
    details: "80M² • KING BED • 3 GUESTS",
    description:
      "An intimate sanctuary bathed in warm amber tones, featuring private garden sit-out terraces and bespoke botanical decor.",
  },
  {
      image: require("../assets/room1.png"),
    title: "Executive Horizon Suite",
    details: "70M² • QUEEN BED • 2 GUESTS",
    description:
      "Understated modern elegance with premium handwoven linens, rain shower, and golden-hour sunset vistas across the grounds.",
  },
  {
     image: require("../assets/room1.png"),
    title: "Luxury Garden Villa",
    details: "88M² • KING BED • 4 GUESTS",
    description:
      "A refined private retreat surrounded by lush gardens, natural textures, and thoughtfully designed interiors.",
  },
  {
  image: require("../assets/room1.png"),
    title: "Presidential Lake Suite",
    details: "110M² • KING BED • 4 GUESTS",
    description:
      "An expansive private suite featuring elegant interiors, generous living spaces, and uninterrupted views of the surrounding landscape.",
  },
];

const HomeRooms = () => {
  return (
    <section className="home-rooms">
      <div className="container home-rooms-container">

        {/* ================= HEADER ================= */}
        <div className="home-rooms-header">

          <div className="home-rooms-heading-content">

            <span className="home-rooms-eyebrow">
              — Luxury Suites & Villas —
            </span>

            <h2 className="home-rooms-title">
              Featured Rooms
            </h2>

            <p className="home-rooms-subheading">
              Discover our newly appointed suites and private villas,
              designed with natural materials and panoramic viewpoints
              for an unforgettable retreat.
            </p>

          </div>

          {/* ================= CONTROLS ================= */}
          <div className="home-rooms-controls">

            <button
              type="button"
              className="home-rooms-prev"
              aria-label="Previous room"
            >
              ←
            </button>

            <button
              type="button"
              className="home-rooms-next"
              aria-label="Next room"
            >
              →
            </button>

          </div>

        </div>


        {/* ================= ROOMS SLIDER ================= */}
        <div className="home-rooms-slider-wrapper">

          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".home-rooms-prev",
              nextEl: ".home-rooms-next",
            }}
            slidesPerView={3}
            slidesPerGroup={1}
            spaceBetween={30}
            speed={700}
            loop={false}
            watchOverflow={true}
            grabCursor={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 18,
              },

              576: {
                slidesPerView: 1.5,
                slidesPerGroup: 1,
                spaceBetween: 20,
              },

              768: {
                slidesPerView: 2,
                slidesPerGroup: 1,
                spaceBetween: 24,
              },

              992: {
                slidesPerView: 3,
                slidesPerGroup: 1,
                spaceBetween: 25,
              },

              1200: {
                slidesPerView: 3,
                slidesPerGroup: 1,
                spaceBetween: 30,
              },
            }}
            className="home-rooms-swiper"
          >

            {roomsData.map((room, index) => (
              <SwiperSlide key={index}>

                <article className="home-room-card">

                  {/* IMAGE */}
                  <div className="home-room-image-wrap">

                    <img
                      src={room.image}
                      alt={room.title}
                      className="home-room-image"
                    />

                  </div>


                  {/* CONTENT */}
                  <div className="home-room-content">

                    <h3 className="home-room-title">
                      {room.title}
                    </h3>

                    <div className="home-room-details">
                      {room.details}
                    </div>

                    <p className="home-room-description">
                      {room.description}
                    </p>

                    <a
                      href="#rooms"
                      className="home-room-link"
                    >
                      EXPLORE ROOM
                      <span>→</span>
                    </a>

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

export default HomeRooms;