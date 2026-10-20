import React, { useState, useEffect } from "react";
import "./Gallery.css";
import PageBanner from "../components/PageBanner";

const galleryData = [
  {
    category: "Property & Nature",
    images: [
      {
        src: require("../assets/outdoor_wide/DJI_20260920170134_0593_D.JPG"),
        alt: "High-resolution drone aerial view of King 11 Resort nestled in pristine greenery",
        title: "Aerial Estate Panorama",
      },
      {
        src: require("../assets/outdoor_wide/DJI_20260920170213_0594_D.JPG"),
        alt: "Aerial landscape showing surrounding forest hills and resort perimeter",
        title: "Forest Hills & Horizon",
      },
      {
        src: require("../assets/outdoor_wide/DJI_20260920170314_0596_D.JPG"),
        alt: "Expansive aerial vista capturing the resort architecture and lakefront",
        title: "Lakeside Valley Vista",
      },
      {
        src: require("../assets/outdoor_wide/DSC05886.JPG"),
        alt: "Grand architectural facade of King 11 with majestic archways and stonework",
        title: "Palatial Architectural Facade",
      },
      {
        src: require("../assets/outdoor_wide/DSC05888.JPG"),
        alt: "Twilight golden hour view of the property with warm ambient pathway lights",
        title: "Twilight Estate Grounds",
      },
      {
        src: require("../assets/outdoor_wide/DSC05904.JPG"),
        alt: "Sunset sky casting golden hues across the open resort lawns and hills",
        title: "Golden Hour Horizon",
      },
    ],
  },
  {
    category: "Reception & Lounge",
    images: [
      {
        src: require("../assets/Reception/DSC05842.JPG"),
        alt: "Grand entrance foyer of King 11 Resort with warm lighting and heritage decor",
        title: "The Grand Entrance",
      },
      {
        src: require("../assets/Reception/DSC05843.JPG"),
        alt: "Main reception desk with dedicated concierge and teak wood backdrop",
        title: "Welcome Concierge Desk",
      },
      {
        src: require("../assets/Reception/DSC05847.JPG"),
        alt: "Luxurious lobby seating lounge with comfortable designer sofas for guests",
        title: "Lobby Guest Lounge",
      },
      {
        src: require("../assets/Reception/DSC05852.JPG"),
        alt: "Intricate interior design details and brass decor inside the welcome pavilion",
        title: "Heritage Pavilion Details",
      },
      {
        src: require("../assets/Reception/DSC05909.JPG"),
        alt: "Golden illumination of King 11 reception facade at dusk",
        title: "Evening Foyer Illumination",
      },
      {
        src: require("../assets/Reception/DSC05927.JPG"),
        alt: "Executive corridor leading from the lobby to the private luxury suites",
        title: "Executive Suite Corridor",
      },
    ],
  },
  {
    category: "Rooms & Suites",
    images: [
      {
        src: require("../assets/Rooms/DSC05791.JPG"),
        alt: "Royal Heritage Suite master bedroom with handcrafted wooden bed and plush linens",
        title: "Royal Heritage Suite",
      },
      {
        src: require("../assets/Rooms/DSC05794.JPG"),
        alt: "Luxury Suite seating lounge with warm ambient lighting and artisanal armchairs",
        title: "Suite Lounge & Seating",
      },
      {
        src: require("../assets/Rooms/DSC05838.JPG"),
        alt: "Presidential Lake Suite master bedroom with panoramic lake vistas and artisanal textures",
        title: "Presidential Lake Suite",
      },
    ],
  },
  {
    category: "Dining & Bar",
    images: [
      {
        src: require("../assets/Dining/DSC05855.JPG"),
        alt: "Fine dining restaurant with artisanal dinnerware, glassware and ambient table lamps",
        title: "Artisanal Fine Dining",
      },
      {
        src: require("../assets/Dining/DSC05860.JPG"),
        alt: "Warm restaurant interior with bespoke chandeliers and intimate dining booths",
        title: "Intimate Dining Hall",
      },
      {
        src: require("../assets/Dining/DSC05864.JPG"),
        alt: "Restaurant dining room with expansive glass windows overlooking resort greens",
        title: "Scenic Restaurant View",
      },
      {
        src: require("../assets/Dining/DSC05872.JPG"),
        alt: "Alfresco open-air dining terrace during twilight at King 11 Resort",
        title: "Sunset Terrace Dining",
      },
      {
        src: require("../assets/Dining/DSC05874.JPG"),
        alt: "Chef's gourmet fine dining culinary creation presented with artistic garnishing",
        title: "Chef's Gourmet Delicacy",
      },
      {
        src: require("../assets/Dining/DSC05884.JPG"),
        alt: "King 11 cocktail lounge and bar area with stylish mood lighting",
        title: "Cocktail Lounge & Bar",
      },
    ],
  },
  {
    category: "Swimming Pool",
    images: [
      {
        src: require("../assets/outdoor_wide/DSC05876.JPG"),
        alt: "Resort swimming pool with sun loungers overlooking misty scenic hills",
        title: "Lakeside Swimming Pool",
      },
      {
        src: require("../assets/outdoor_wide/DSC05895.JPG"),
        alt: "Sparkling crystal blue pool waters surrounded by manicured tropical gardens",
        title: "Tropical Pool Oasis",
      },
      {
        src: require("../assets/outdoor_wide/DSC05897.JPG"),
        alt: "Comfortable poolside sunbeds with umbrellas for daytime relaxation",
        title: "Poolside Sun Deck",
      },
      {
        src: require("../assets/outdoor_wide/DSC05883.JPG"),
        alt: "Serene garden pathway leading to the outdoor pool and relaxation deck",
        title: "Botanical Pool Path",
      },
      {
        src: require("../assets/outdoor_wide/DSC05896.JPG"),
        alt: "Panoramic swimming pool under clear blue skies at King 11 Resort",
        title: "Azure Pool Waters",
      },
      {
        src: require("../assets/outdoor_wide/DSC05905.JPG"),
        alt: "Evening pool reflection with soft architectural lighting and calm water",
        title: "Twilight Pool Serenity",
      },
    ],
  },
  {
    category: "Events & Lawns",
    images: [
      {
        src: require("../assets/outdoor_wide/DSC05900.JPG"),
        alt: "Spacious manicured lawn designed for destination weddings and corporate retreats",
        title: "The Grand Celebration Lawn",
      },
      {
        src: require("../assets/outdoor_wide/DSC05901.JPG"),
        alt: "Open green amphitheater lawn with panoramic backdrop of rolling hills",
        title: "Mountain View Amphitheater",
      },
      {
        src: require("../assets/outdoor_wide/DSC05917.JPG"),
        alt: "Festive evening celebration setup with glowing fairy lights and ambient decor",
        title: "Festive Twilight Gathering",
      },
      {
        src: require("../assets/outdoor_wide/DSC05924.JPG"),
        alt: "Night gathering terrace illuminated for private outdoor celebrations",
        title: "Private Starlit Terrace",
      },
      {
        src: require("../assets/outdoor_wide/DJI_20260920170521_0601_D.JPG"),
        alt: "Aerial view of the resort event grounds, outdoor dining area and lawns",
        title: "Aerial Event Pavilion",
      },
      {
        src: require("../assets/outdoor_wide/DSC05891.JPG"),
        alt: "Sunlit garden courtyard surrounded by lush ornamental plants and trees",
        title: "Botanical Courtyard",
      },
    ],
  },
];

const categories = ["All", ...galleryData.map((item) => item.category)];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredData =
    activeCategory === "All"
      ? galleryData
      : galleryData.filter((item) => item.category === activeCategory);

  // Escape key closes lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  // Lock background scroll while lightbox is open
  useEffect(() => {
    if (!selectedImage) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedImage]);

  const openImage = (image) => setSelectedImage(image);

  return (
    <>
      <PageBanner
        backgroundImage={require("../assets/outdoor_wide/DJI_20260920170134_0593_D.JPG")}
        title="Gallery"
        homeLink="/"
        homeText="Home"
        currentPage="Gallery"
      />

      <section className="gallery-section">
        {/* HEADER */}
        <div className="gallery-wrapper">
          <div className="gallery-header">
            <span className="gallery-eyebrow">
              <span className="gallery-eyebrow-line eyebrow-text"></span>
              OUR GALLERY
            </span>

            <h2 className="gallery-heading section-heading">Moments at King 11</h2>

            <p className="gallery-description section-subHeading">
              Explore the spaces, experiences and memories that make every stay
              at King 11 Resort truly unforgettable.
            </p>
          </div>

          {/* FILTER BUTTONS */}
          <div className="gallery-filter" role="tablist">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={activeCategory === category}
                className={`gallery-filter-button ${
                  activeCategory === category ? "gallery-filter-button-active" : ""
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* FULL-WIDTH GALLERY */}
        <div className="container-fluid gallery-container-fluid">
          {filteredData.map((categoryData) => (
            <div className="gallery-category" key={categoryData.category}>
              {/* CATEGORY TITLE */}
              {activeCategory === "All" && (
                <div className="gallery-category-heading">
                  <span>{categoryData.category}</span>
                  <div className="gallery-category-line"></div>
                </div>
              )}

              {/* IMAGE GRID */}
              <div className="gallery-grid">
                {categoryData.images.map((imgObj, index) => {
                  const imageSrc = typeof imgObj === "string" ? imgObj : imgObj.src;
                  const imageAlt =
                    typeof imgObj === "string"
                      ? `${categoryData.category} view ${index + 1}`
                      : imgObj.alt;
                  const imageTitle =
                    typeof imgObj === "string" ? "View Image" : imgObj.title;

                  const imageClass =
                    index % 3 === 2 ? "gallery-image-full" : "gallery-image-small";

                  const imageData = {
                    src: imageSrc,
                    alt: imageAlt,
                    title: imageTitle,
                    category: categoryData.category,
                  };

                  return (
                    <div
                      className={`gallery-image-item ${imageClass}`}
                      key={`${categoryData.category}-${index}`}
                      onClick={() => openImage(imageData)}
                      role="button"
                      tabIndex={0}
                      aria-label={`Open preview for ${imageTitle}`}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          openImage(imageData);
                        }
                      }}
                    >
                      <div className="gallery-image-wrapper">
                        <img
                          src={imageSrc}
                          alt={imageAlt}
                          loading={index < 2 ? "eager" : "lazy"}
                          decoding="async"
                        />

                        <div className="gallery-image-overlay">
                          <span className="gallery-overlay-badge">
                            {categoryData.category}
                          </span>
                          <h4 className="gallery-overlay-title">{imageTitle}</h4>
                          <span className="gallery-overlay-action">
                            View Image <span>↗</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {selectedImage && (
        <div
          className="gallery-lightbox"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
        >
          <div
            className="gallery-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="gallery-lightbox-close"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image preview"
            >
              ✕
            </button>

            <div className="gallery-lightbox-image-wrap">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="gallery-lightbox-img"
              />
            </div>

            <div className="gallery-lightbox-caption">
              <span className="gallery-lightbox-category">
                {selectedImage.category}
              </span>
              <h3 className="gallery-lightbox-title">{selectedImage.title}</h3>
              <p className="gallery-lightbox-desc">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;