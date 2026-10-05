import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import outsideViewImg from '../assets/outside view.png'
import receptionImg from '../assets/reception.png'
import restImg from '../assets/rest.png'
import gardenImg from '../assets/garden.png'
import wideViewVid from '../assets/video//wide_view.MP4'

import restrautntVid from '../assets/video//restrautnt.MP4'
import outsideVid from '../assets/video//outside.MP4'
import './HomeGallery.css'

const galleryItems = [
  { id: 1, type: 'image', src: outsideViewImg, title: 'Panoramic Resort Grounds', category: 'Architecture & Nature' },
  { id: 2, type: 'video', src: wideViewVid, title: 'Lakeside Horizon Views', category: 'Video Experience' },
  { id: 3, type: 'image', src: receptionImg, title: 'The Grand Welcome Lounge', category: 'Interior & Heritage' },
  { id: 4, type: 'video', src: restrautntVid, title: 'Fine Dining & Sunset Terrace', category: 'Culinary Journey' },
  { id: 5, type: 'image', src: gardenImg, title: 'Botanical Sanctuary & Trails', category: 'Landscape Gardens' },
  { id: 6, type: 'video', src: outsideVid, title: 'Alfresco Veranda & Poolside', category: 'Outdoor Leisure' },
  { id: 7, type: 'image', src: restImg, title: 'Artisanal Restaurant & Bar', category: 'Dining Ambiance' },
]

const testimonials = [
  {
    quote: "The attention to detail was outstanding. From the warm welcome to the peaceful atmosphere and stunning views, every moment felt thoughtfully curated. We can't wait to return.",
    name: 'Sophia Carter',
    source: 'TripAdvisor',
    rating: 4,
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

// Works out a large/small/small rhythm per row of 3, and gracefully
// collapses leftover rows (1 or 2 items) so filtering never leaves gaps.
function getSpanClass(index, total) {
  const position = index % 3
  const rowStart = index - position
  const itemsInRow = Math.min(3, total - rowStart)

  if (itemsInRow === 1) return 'span-full'
  if (itemsInRow === 2) return 'span-half'
  return position === 0 ? 'span-large' : 'span-small'
}

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
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
        <span className="section-eyebrow">— Property Highlights —</span>
        <h2 className="section-title">Life at King 11</h2>
        <p className="section-description">
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
        <button className={`gallery-filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>
          All ({galleryItems.length})
        </button>
        <button className={`gallery-filter-btn ${filter === 'photos' ? 'active' : ''}`} onClick={() => setFilter('photos')}>
          Photos ({galleryItems.filter((i) => i.type === 'image').length})
        </button>
        <button className={`gallery-filter-btn ${filter === 'videos' ? 'active' : ''}`} onClick={() => setFilter('videos')}>
          Live Videos ({galleryItems.filter((i) => i.type === 'video').length})
        </button>
      </motion.div>

      <div className="gallery-grid">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, index) => (
            <motion.div
              className={`gallery-item ${getSpanClass(index, filteredItems.length)}`}
              key={item.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.25 } }}
              layout
            >
              <span className="gallery-badge">
                <span className="gallery-badge-dot" />
                {item.type === 'video' ? 'Live Video' : 'Photo'}
              </span>

              {item.type === 'video' ? (
                <video src={item.src} autoPlay muted loop playsInline preload="metadata" />
              ) : (
                <img src={item.src} alt={item.title} loading="lazy" decoding="async" />
              )}

              <div className="gallery-item-overlay">
                <h3 className="gallery-item-title">{item.title}</h3>
                <span className="gallery-item-category">{item.category}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <motion.div
        className="testimonial-banner"
        style={{ backgroundImage: `url(${outsideViewImg})` }}
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
                  <span key={i} className={`star ${i < currentTestimonial.rating ? 'filled' : ''}`}>★</span>
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

export default HomeGallery;