import React, { useState } from 'react'
import { motion } from 'framer-motion'
import receptionImg from '../assets/reception.png'
import bentoBg from '../assets/bento_bg.png' // adjust extension if yours differs
import room1 from '../assets/room1.png'
import room2 from '../assets/room2.png'
import room3 from '../assets/room3.png'
import room4 from '../assets/room4.png'

import './Room.css'

/* ---------------- data ---------------- */

const rooms = [
  { id: 'r1', img: room1, name: 'Garden View Room', size: '32 sqm', bed: '2 Bed', bath: '1 Bathroom' },
  { id: 'r2', img: room2, name: 'Lake View Suite', size: '48 sqm', bed: '3 Bed', bath: '2 Bathroom' },
  { id: 'r3', img: room3, name: 'Heritage Room', size: '30 sqm', bed: '2 Bed', bath: '1 Bathroom' },
  { id: 'r4', img: room4, name: 'Presidential Suite', size: '68 sqm', bed: '4 Bed', bath: '3 Bathroom' },
]

const testimonials = [
  {
    id: 't1',
    quote: 'The room was exactly as pictured — quiet, spotless, and the staff remembered our names by day two.',
    name: 'Aarav Mehta',
    role: 'Business Traveller',
  },
  {
    id: 't2',
    quote: 'We booked the Lake View Suite for our anniversary. Watching the sunrise from bed is not something we will forget.',
    name: 'Priya Nair',
    role: 'Guest',
  },
  {
    id: 't3',
    quote: 'Best stay in the region for the price. The Heritage Room in particular has a character hotels this size rarely bother with.',
    name: 'Karan Bhatt',
    role: 'Weekend Guest',
  },
]

/* ---------------- word-stagger heading ---------------- */

function StaggerHeading({ text, className, delayStart = 0 }) {
  const words = text.split(' ')
  return (
    <h1 className={className} style={{ overflow: 'hidden' }}>
      {words.map((word, i) => (
        <span key={i} style={{ display: 'inline-block', overflow: 'hidden', marginRight: '0.28em' }}>
          <motion.span
            style={{ display: 'inline-block' }}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
              delay: delayStart + i * 0.08,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </h1>
  )
}

/* ---------------- room card ---------------- */

function RoomCard({ room, index }) {
  return (
    <motion.article
      className="room-card"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.65, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
    >
      <img src={room.img} alt={room.name} loading="lazy" className="room-card-img" />
      <div className="room-card-scrim" />
      <button className="room-card-arrow" aria-label={`View ${room.name}`}>
        →
      </button>
      <div className="room-card-info">
        <h3>{room.name}</h3>
        <p className="room-card-meta">
          {room.size} <span className="dot">·</span> {room.bed} <span className="dot">·</span> {room.bath}
        </p>
      </div>
    </motion.article>
  )
}

/* ---------------- testimonial card ---------------- */

function TestimonialCard({ item, index, active }) {
  return (
    <motion.div
      className={`testimonial-card ${active ? 'is-active' : ''}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="testimonial-stars">★★★★★</div>
      <p className="testimonial-quote">{item.quote}</p>
      <div className="testimonial-author">
        <div className="testimonial-avatar">{item.name.charAt(0)}</div>
        <div>
          <p className="testimonial-name">{item.name}</p>
          <p className="testimonial-role">{item.role}</p>
        </div>
      </div>
    </motion.div>
  )
}

/* ---------------- page ---------------- */

function Room() {
  const [activeDot, setActiveDot] = useState(0)

  return (
    <div className="room-page">
      {/* Hero banner — reception.png + staggered word reveal, matching reference transition */}
      <header className="room-hero" style={{ backgroundImage: `url(${receptionImg})` }}>
        <div className="room-hero-overlay" />
        <div className="room-hero-content">
          <motion.p
            className="room-hero-eyebrow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Rooms &amp; Suites
          </motion.p>
          <StaggerHeading text="Explore Rooms and Suites" className="room-hero-title" delayStart={0.15} />
        </div>
      </header>

      {/* Intro */}
      <section className="rooms-intro">
        <p className="rooms-eyebrow">— Accommodations —</p>
        <h2 className="rooms-heading">Four rooms, no two alike</h2>
        <p className="rooms-lede">
          Each room at King 11 was finished on its own terms — different
          light, different view, different reason to book it.
        </p>
      </section>

      {/* Room grid — background is bento_bg, no overlay/scrim on top of it */}
      <section
        className="rooms-grid-section"
        style={{ backgroundImage: `url(${bentoBg})` }}
      >
        <div className="rooms-grid">
          {rooms.map((room, i) => (
            <RoomCard key={room.id} room={room} index={i} />
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="testimonial-section">
        <p className="testimonial-eyebrow">Testimonial</p>
        <h2 className="testimonial-heading">
          Listen To Our Pleased<br />Customers&rsquo; Opinions About Us.
        </h2>
        <div className="testimonial-grid">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.id} item={t} index={i} active={i === activeDot} />
          ))}
        </div>
        <div className="testimonial-dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`testimonial-dot ${i === activeDot ? 'is-active' : ''}`}
              onClick={() => setActiveDot(i)}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </section>


    </div>
  )
}

export default Room