import React, { useState } from "react";
import PageBanner from "../components/PageBanner";
import "./Room.css";

const roomCategories = [
  "All Rooms",
  "King Rooms",
  "Twin Rooms",
  "Suites",
];

const roomsData = [
  {
    id: 1,
    title: "1 King Bed Room",
    category: "King Rooms",
    area: "22 sq m",
    description:
      "Unwind in a space fit for kings and queens with panoramic natural views in this chic room. Features a king bed, stylish seating, and well-appointed bathroom.",
    image: require("../assets/Rooms/DSC05791.JPG"),
    alt: "1 King Bed Room at King 11 Resort with warm lighting and comfortable king mattress",
    detailsLink: "/rooms/king-bed",
    ratesLink: "/booking?room=king-bed",
  },
  {
    id: 2,
    title: "Deluxe King Room",
    category: "King Rooms",
    area: "25 sq m",
    description:
      "Relax in a thoughtfully designed room featuring comfortable bedding, elegant interiors, modern amenities, and a welcoming atmosphere for a memorable stay.",
    image: require("../assets/Rooms/DSC05794.JPG"),
    alt: "Deluxe King Room interior with artisan armchairs and wooden headboard at King 11 Resort",
    detailsLink: "/rooms/deluxe-king",
    ratesLink: "/booking?room=deluxe-king",
  },
  {
    id: 3,
    title: "Premium King Room",
    category: "King Rooms",
    area: "28 sq m",
    description:
      "Experience added comfort in a spacious room with contemporary furnishings, a relaxing sleeping area, and all the essentials for a comfortable getaway.",
    image: require("../assets/Rooms/DSC05800.JPG"),
    alt: "Premium King Room with expansive window view of resort greenery at King 11 Resort",
    detailsLink: "/rooms/premium-king",
    ratesLink: "/booking?room=premium-king",
  },
  {
    id: 4,
    title: "Twin Bed Room",
    category: "Twin Rooms",
    area: "22 sq m",
    description:
      "Perfect for friends and colleagues, this inviting room features twin beds, functional furnishings, and a comfortable setting for a refreshing stay.",
    image: require("../assets/Rooms/DSC05804.JPG"),
    alt: "Twin Bed Room at King 11 Resort with modern wooden bedside tables and soothing decor",
    detailsLink: "/rooms/twin-bed",
    ratesLink: "/booking?room=twin-bed",
  },
  {
    id: 5,
    title: "Deluxe Twin Room",
    category: "Twin Rooms",
    area: "26 sq m",
    description:
      "Enjoy extra space and thoughtful amenities in a modern twin room designed for convenience, relaxation, and a comfortable experience.",
    image: require("../assets/Rooms/DSC05809.JPG"),
    alt: "Deluxe Twin Room with warm ambient lighting and plush pillows at King 11 Resort",
    detailsLink: "/rooms/deluxe-twin",
    ratesLink: "/booking?room=deluxe-twin",
  },
  {
    id: 6,
    title: "Superior Twin Room",
    category: "Twin Rooms",
    area: "28 sq m",
    description:
      "A stylish room with contemporary decor, comfortable twin beds, and a peaceful atmosphere that makes every stay feel effortless.",
    image: require("../assets/Rooms/DSC05814.JPG"),
    alt: "Superior Twin Room with bespoke woodwork and elegant curtains at King 11 Resort",
    detailsLink: "/rooms/superior-twin",
    ratesLink: "/booking?room=superior-twin",
  },
  {
    id: 7,
    title: "Junior Suite",
    category: "Suites",
    area: "35 sq m",
    description:
      "Discover a more spacious stay with refined interiors, a comfortable lounge area, and carefully selected amenities for added relaxation.",
    image: require("../assets/Rooms/DSC05823.JPG"),
    alt: "Junior Suite at King 11 Resort with expansive bedroom and lounge sitting area",
    detailsLink: "/rooms/junior-suite",
    ratesLink: "/booking?room=junior-suite",
  },
  {
    id: 8,
    title: "Executive Suite",
    category: "Suites",
    area: "42 sq m",
    description:
      "Enjoy an elevated stay with elegant furnishings, generous space, and a sophisticated atmosphere suited to both business and leisure.",
    image: require("../assets/Rooms/DSC05828.JPG"),
    alt: "Executive Suite living space with handcrafted furniture and mountain panorama view",
    detailsLink: "/rooms/executive-suite",
    ratesLink: "/booking?room=executive-suite",
  },
  {
    id: 9,
    title: "Luxury Suite",
    category: "Suites",
    area: "48 sq m",
    description:
      "Make your stay special with spacious interiors, elegant details, and a relaxing environment designed for an exceptional hospitality experience.",
    image: require("../assets/Rooms/DSC05838.JPG"),
    alt: "Luxury Suite master bedroom with premium linens and panoramic lake vista at King 11 Resort",
    detailsLink: "/rooms/luxury-suite",
    ratesLink: "/booking?room=luxury-suite",
  },
];

const Rooms = () => {
  const [activeCategory, setActiveCategory] = useState("All Rooms");

  const filteredRooms =
    activeCategory === "All Rooms"
      ? roomsData
      : roomsData.filter(
          (room) => room.category === activeCategory
        );

  return (
    <main className="rooms-page">
      <PageBanner
        backgroundImage={require("../assets/Rooms/DSC05791.JPG")}
        title="Rooms & Suites"
        homeLink="/"
        homeText="Home"
        currentPage="Rooms & Suites"
      />

      <section className="rooms-section">
        <div className="rooms-container">
          <div className="rooms-heading">
            <span className="rooms-eyebrow eyebrow-text">STAY WITH COMFORT</span>

            <h2 className="section-heading">Find Your Perfect Stay</h2>

            <p className="section-para">
              Discover thoughtfully designed rooms and suites
              created to make your stay relaxing, comfortable,
              and memorable.
            </p>
          </div>

          <div
            className="rooms-filters"
            role="group"
            aria-label="Filter rooms by category"
          >
            {roomCategories.map((category) => (
              <button
                key={category}
                type="button"
                className={`rooms-filter-btn ${
                  activeCategory === category ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="rooms-grid">
            {filteredRooms.map((room) => (
              <article className="room-card" key={room.id}>
                <div className="room-card-image">
                  <img
                    src={room.image}
                    alt={room.alt || room.title}
                    loading="lazy"
                  />
                </div>

                <div className="room-card-content">
                  <h3 className="room-card-title">
                    {room.title}
                  </h3>

                  <p className="room-card-meta">
                    {room.area} <span>/</span> View Varies
                  </p>

                  <p className="room-card-description">
                    {room.description}
                  </p>

                  <div className="room-card-actions">
                    <a
                      className="room-details-link"
                      href={room.detailsLink}
                    >
                      Room Details
                    </a>

                    <a
                      className="room-rates-link"
                      href={room.ratesLink}
                    >
                      View Rates
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredRooms.length === 0 && (
            <p className="rooms-empty">
              No rooms are available in this category.
            </p>
          )}
        </div>
      </section>
    </main>
  );
};

export default Rooms;