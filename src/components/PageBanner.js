import React from "react";
import { Link } from "react-router-dom";
import "./PageBanner.css";

const PageBanner = ({
  backgroundImage,
  title = "About Us",
  homeLink = "/",
  homeText = "Home",
  currentPage,
}) => {
  return (
    <section
      className="page-banner"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Background Overlay */}
      <div className="page-banner-overlay"></div>

      {/* Banner Content */}
      <div className="page-banner-content">

        {/* Page Title */}
        <h1 className="page-banner-title">
          {title}
        </h1>

        {/* Breadcrumb */}
        <div className="page-banner-breadcrumb">

          <Link to={homeLink}>
            {homeText}
          </Link>

          <span className="page-banner-separator">
            &gt;
          </span>

          <span className="page-banner-current">
            {currentPage || title}
          </span>

        </div>

        {/* Animated Vertical Line */}
        <div className="page-banner-line-wrapper">
          <span className="page-banner-line"></span>
        </div>

      </div>
    </section>
  );
};

export default PageBanner;