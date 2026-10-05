import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <motion.div
        className="footer-inner"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="footer-top">
          {/* Brand */}
          <div>
            <span className="footer-brand-name">King 11 Resort</span>
            <span className="footer-brand-tagline">
              A sanctuary of calm, luxury, and natural beauty — crafted for those
              who seek the extraordinary.
            </span>
            <div className="footer-social">
              {/* Instagram */}
              <a href="/n" className="footer-social-link" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              {/* Facebook */}
              <a href="/n" className="footer-social-link" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              {/* Twitter / X */}
              <a href="/n" className="footer-social-link" aria-label="X">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 4l16 16M20 4L4 20" />
                </svg>
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <span className="footer-col-title">Explore</span>
            <ul className="footer-col-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/rooms">Rooms &amp; Suites</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact &amp; Booking</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <span className="footer-col-title">Services</span>
            <ul className="footer-col-links">
              {['Private Events', 'Weddings', 'Corporate Stays', 'Excursions', 'Airport Transfer'].map((link) => (
                <li key={link}><a href="#">{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <span className="footer-col-title">Contact</span>
            <ul className="footer-col-links">
              <li><a href="tel:+18005464611">+1 (800) KING-11</a></li>
              <li><a href="mailto:reservations@king11resort.com">reservations@king11resort.com</a></li>
              <li><a href="/Cookie">Lakeside Hills, Nature Reserve District</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copy">
            &copy; {new Date().getFullYear()} King 11 Resort. All rights reserved.
          </span>
          <div className="footer-legal">
            <a href="/Cookie">Privacy Policy</a>
            <a href="/Cookie">Terms of Use</a>
            <a href="/Cookie">Cookie Settings</a>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer