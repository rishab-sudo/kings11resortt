import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    'Private Events',
    'Weddings',
    'Corporate Stays',
    'Excursions',
    'Airport Transfer',
  ];

  return (
    <footer className="footer">
      <motion.div
        className="footer-inner"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.75,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="footer-brand-name">
              King 11 Resort
            </Link>

            <p className="footer-brand-tagline">
              A sanctuary of calm, luxury, and natural beauty — crafted
              for those who seek the extraordinary.
            </p>

            {/* Social Media */}
            <div className="footer-social">
              <a
                href="https://www.instagram.com/"
                className="footer-social-link"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>

              <a
                href="https://www.facebook.com/"
                className="footer-social-link"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              <a
                href="https://x.com/"
                className="footer-social-link"
                aria-label="X"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path d="M4 4l16 16M20 4L4 20" />
                </svg>
              </a>
            </div>
          </div>

          {/* Explore */}
          <div className="footer-column">
            <span className="footer-col-title">Explore</span>

            <ul className="footer-col-links">
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/rooms">Rooms &amp; Suites</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/contact">Contact &amp; Booking</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-column">
            <span className="footer-col-title">Services</span>

            <ul className="footer-col-links">
              {services.map((service) => (
                <li key={service}>
                  <Link to="/contact">{service}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-column">
            <span className="footer-col-title">Contact</span>

            <ul className="footer-col-links">
              <li>
                <a href="tel:+18005464611">
                  +1 (800) KING-11
                </a>
              </li>

              <li>
                <a href="mailto:reservations@king11resort.com">
                  reservations@king11resort.com
                </a>
              </li>

              <li>
                <Link to="/contact">
                  Lakeside Hills, Nature Reserve District
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <span className="footer-copy">
            &copy; {currentYear} King 11 Resort. All rights reserved.
          </span>

          <div className="footer-legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms of Use</Link>
            <Link to="/cookie-policy">Cookie Settings</Link>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;
