import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Outdoor / Property Images
import outdoorImg2 from '../assets/outdoor_wide/DSC05886.JPG'
import outdoorImg3 from '../assets/outdoor_wide/DSC05904.JPG'

// Reception Images
import receptionImg1 from '../assets/reception.png'

// Dining Images
import diningImg2 from '../assets/Dining/DSC05874.JPG'

// Rooms Images
import roomImg1 from '../assets/Rooms/DSC05791.JPG'

// Videos
import wideViewVid from '../assets/video/wide_view.MP4'
import restrautntVid from '../assets/video/restrautnt.MP4'
import outsideVid from '../assets/video/outside.MP4'

import './HomeGallery.css'

const galleryItems = [
  {
    id: 1,
    type: 'video',
    src: wideViewVid,
    title: 'Lakeside Horizon & Estate Grounds',
    category: 'Estate Panorama',
    tag: 'Aerial Live View',
    detail: 'Scenic mountain horizons & open tranquil waters',
    bentoSpan: 'bento-hero',
    alt: 'High-definition live video showcasing King 11 Resort lakeside horizon and mountain estate',
  },
  {
    id: 2,
    type: 'image',
    src: receptionImg1,
    title: 'The Grand Welcome Lounge',
    category: 'Interior & Heritage',
    tag: 'Foyer & Concierge',
    detail: 'Handcrafted teak wood & imperial brass motifs',
    bentoSpan: 'bento-tall',
    alt: 'King 11 grand reception foyer with designer chandeliers and warm ambient lighting',
  },
  {
    id: 3,
    type: 'video',
    src: restrautntVid,
    title: 'Fine Dining & Sunset Terrace',
    category: 'Culinary Journey',
    tag: 'Live Restaurant',
    detail: 'Alfresco dining amidst gentle evening breezes',
    bentoSpan: 'bento-third',
    alt: 'Video showing the evening ambiance of King 11 fine dining restaurant and terrace',
  },
  {
    id: 4,
    type: 'image',
    src: roomImg1,
    title: 'Royal Heritage Suite',
    category: 'Suites & Retreats',
    tag: 'Master Suite',
    detail: '92M² • King Bed • Private Balcony',
    bentoSpan: 'bento-third',
    alt: 'Royal Heritage Suite king bedroom with artisanal furnishings at King 11 Resort',
  },
  {
    id: 5,
    type: 'video',
    src: outsideVid,
    title: 'Alfresco Veranda & Poolside',
    category: 'Outdoor Leisure',
    tag: 'Live Poolside',
    detail: 'Sun-drenched pool deck with plush loungers',
    bentoSpan: 'bento-third',
    alt: 'Video tour of the sparkling outdoor swimming pool and relaxation deck at King 11 Resort',
  },
  {
    id: 6,
    type: 'image',
    src: diningImg2,
    title: 'Chef’s Artisanal Gastronomy',
    category: 'Dining Experience',
    tag: 'Gourmet Delicacy',
    detail: 'Farm-to-table culinary craftsmanship',
    bentoSpan: 'bento-half',
    alt: 'Gourmet culinary dish artistically presented with organic ingredients at King 11 Resort',
  },
  {
    id: 7,
    type: 'image',
    src: outdoorImg2,
    title: 'Palatial Grounds & Botanical Trails',
    category: 'Estate & Nature',
    tag: 'Sanctuary Grounds',
    detail: 'Surrounded by ancient trees & wild hills',
    bentoSpan: 'bento-half',
    alt: 'Exterior architectural facade and manicured flower gardens of King 11 Resort',
  },
]

const testimonials = [
  {
    quote: "The attention to detail was outstanding. From the warm welcome to the peaceful atmosphere and stunning views, every moment felt thoughtfully curated. We can't wait to return.",
    name: 'Sophia Carter',
    source: 'TripAdvisor',
    rating: 5,
  },
  {
    quote: 'A stay that felt both effortless and elegant. The staff anticipated every need before we asked.',
    name: 'Daniel Reyes',
    source: 'Google Reviews',
    rating: 5,
  },
  {
    quote: 'Every corner of the property tells a story. We left feeling completely restored.',
    name: 'Amara Singh',
    source: 'Booking.com',
    rating: 5,
  },
]

function getBentoSpanClass(item, filter, index) {
  if (filter === 'all') {
    return item.bentoSpan
  }
  if (filter === 'videos') {
    if (index === 0) return 'bento-full'
    return 'bento-half'
  }
  if (filter === 'photos') {
    if (index === 0) return 'bento-hero'
    if (index === 1) return 'bento-tall'
    return 'bento-half'
  }
  return 'bento-third'
}

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
}

function HomeGallery() {
  const [filter, setFilter] = useState('all')
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const filteredItems = galleryItems.filter((item) => {
    if (filter === 'all') return true
    if (filter === 'photos') return item.type === 'image'
    if (filter === 'videos') return item.type === 'video'
    return true
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const currentTestimonial = testimonials[activeTestimonial]

  return (
    <section id="gallery" className="gallery">
      <motion.div
        className="gallery-header"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="section-eyebrow eyebrow-text">— Curated Bento Showcase —</span>
        <h2 className="section-title section-heading">Life at King 11</h2>
        <p className="section-description section-subHeading">
          Immerse yourself in moments of natural serenity, refined architecture,
          and curated atmospheres captured across the King 11 estate.
        </p>
      </motion.div>

      <motion.div
        className="gallery-filters"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <button
          className={`gallery-filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All Highlights ({galleryItems.length})
        </button>
        <button
          className={`gallery-filter-btn ${filter === 'photos' ? 'active' : ''}`}
          onClick={() => setFilter('photos')}
        >
          Photos ({galleryItems.filter((i) => i.type === 'image').length})
        </button>
        <button
          className={`gallery-filter-btn ${filter === 'videos' ? 'active' : ''}`}
          onClick={() => setFilter('videos')}
        >
          Live Videos ({galleryItems.filter((i) => i.type === 'video').length})
        </button>
      </motion.div>

      {/* PROPER BENTO GRID */}
      <div className="bento-gallery-container">
        <div className="bento-gallery-grid">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                className={`bento-card ${getBentoSpanClass(item, filter, index)}`}
                key={item.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.25 } }}
                layout
              >
                {/* Media Element */}
                <div className="bento-media-wrap">
                  {item.type === 'video' ? (
                    <video
                      src={item.src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      aria-label={item.alt}
                      className="bento-media"
                    />
                  ) : (
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading={index < 2 ? 'eager' : 'lazy'}
                      decoding="async"
                      className="bento-media"
                    />
                  )}
                </div>

                {/* Top Floating Badge */}
                <div className="bento-top-badge">
                  <span className={`bento-badge-dot ${item.type === 'video' ? 'pulse' : ''}`} />
                  <span className="bento-badge-text">
                    {item.type === 'video' ? 'Live Video' : 'Photo'}
                  </span>
                  <span className="bento-badge-sep">•</span>
                  <span className="bento-badge-tag">{item.tag}</span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="bento-content-overlay">
                  <div className="bento-text-group">
                    <span className="bento-category">{item.category}</span>
                    <h3 className="bento-title">{item.title}</h3>
                    <p className="bento-detail">{item.detail}</p>
                  </div>

                  <div className="bento-action-pill">
                    <span>Explore</span>
                    <span className="bento-action-arrow">↗</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* TESTIMONIAL BANNER */}
      <motion.div
        className="testimonial-banner"
        style={{ backgroundImage: `url(${outdoorImg3})` }}
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="testimonial-banner-overlay" />

        <div className="testimonial-banner-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="testimonial-quote">“{currentTestimonial.quote}”</p>

              <div className="testimonial-stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={`star ${i < currentTestimonial.rating ? 'filled' : ''}`}
                  >
                    ★
                  </span>
                ))}
              </div>

              <span className="testimonial-name">
                {currentTestimonial.name} — {currentTestimonial.source}
              </span>
            </motion.div>
          </AnimatePresence>

          <div className="testimonial-dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`testimonial-dot ${i === activeTestimonial ? 'active' : ''}`}
                onClick={() => setActiveTestimonial(i)}
                aria-label={`Show testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default HomeGallery