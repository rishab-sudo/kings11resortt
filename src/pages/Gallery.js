import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import './Gallery.css'

import outsideViewImg from '../assets/outside view.png'
import receptionImg from '../assets/reception.png'
import restImg from '../assets/rest.png'
import gardenImg from '../assets/garden.png'
import wideViewVid from '../assets/video/wide_view.MP4'
import wideView2Vid from '../assets/video/wide_view2.MP4'
import restrautntVid from '../assets/video/restrautnt.MP4'
import outsideVid from '../assets/video/outside.MP4'


const galleryItems = [
  {
    id: 1,
    type: 'image',
    src: outsideViewImg,
    alt: 'King 11 Resort exterior view',
    title: 'The Approach',
    desc: 'A quiet arrival beneath ancient trees, where the outside world softens into stillness. Lantern-lit pathways guide you in, setting the pace for everything that follows.',
    align: 'left',
  },
  {
    id: 2,
    type: 'video',
    src: wideViewVid,
    title: 'Wide Horizons',
    desc: 'Sweeping views across the estate, captured in gentle motion as the day unfolds. Every angle reveals a different mood — quiet mornings, golden afternoons, still evenings.',
    align: 'right',
  },
  {
    id: 3,
    type: 'image',
    src: receptionImg,
    alt: 'King 11 Resort reception',
    title: 'A Warm Welcome',
    desc: 'The reception sets the tone — refined, understated, unmistakably King 11. It is the first impression, and it carries the same calm you will find throughout your stay.',
    align: 'left',
  },
  {
    id: 4,
    type: 'video',
    src: restrautntVid,
    title: 'Dining, Reimagined',
    desc: 'Flavours rooted in place, served in spaces designed for lingering conversation. Each dish is plated with the same attention given to the room around it.',
    align: 'right',
  },
  {
    id: 5,
    type: 'image',
    src: restImg,
    alt: 'King 11 Resort dining area',
    title: 'The Dining Room',
    desc: 'Natural light and curated design come together for every meal, at any hour. Mornings feel unhurried here, and evenings settle into something quietly celebratory.',
    align: 'left',
  },
  {
    id: 6,
    type: 'video',
    src: outsideVid,
    title: 'Beyond the Walls',
    desc: 'The estate opens into its surroundings — gardens, paths, and open sky. Step outside and the pace of the resort follows you, unhurried and easy.',
    align: 'right',
  },
  {
    id: 7,
    type: 'image',
    src: gardenImg,
    alt: 'King 11 Resort botanical garden',
    title: 'The Botanical Garden',
    desc: 'Living poetry — curated greenery that changes character with the light. A favourite spot for slow mornings, quiet reading, and unhurried conversation.',
    align: 'left',
  },
  {
    id: 8,
    type: 'video',
    src: wideView2Vid,
    title: 'Golden Hour',
    desc: 'The estate at its most cinematic, as afternoon turns to dusk. Warm light settles over every surface, and the day exhales into evening.',
    align: 'right',
  },
]

function GalleryRow({ item, index }) {
 const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // continuous floating parallax while in view
  const y = useTransform(scrollYProgress, [0, 1], [40, -40])
  const scale = useTransform(scrollYProgress, [0, 0.2, 1], [0.97, 1, 1])

  const isRight = item.align === 'right'
  const slideDistance =  70

  const floatTransition = {
    duration: 1.1,
    ease: [0.16, 1, 0.3, 1], // slow float, gentle settle
  }

  return (
    <div
      className={`gallery-row ${isRight ? 'gallery-row--reverse' : ''}`}
      ref={ref}
    > 
      <motion.div
        className="gallery-row-media"
        style={{ y, scale }}
        initial={{ opacity: 0, x: isRight ? slideDistance : -slideDistance, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: '-15%' }}
        transition={floatTransition}
      >
        {item.type === 'video' ? (
          <video
            src={item.src}
            autoPlay
            muted
            loop
            playsInline
            className="gallery-media"
          />
        ) : (
          <img
            src={item.src}
            alt={item.alt}
            loading="lazy"
            className="gallery-media"
          />
        )}
      </motion.div>

      <motion.div
        className="gallery-row-text"
        initial={{ opacity: 0, x: isRight ? -slideDistance : slideDistance, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, margin: '-15%' }}
        transition={{ ...floatTransition, delay: 0.15 }}
      >
        <span className="gallery-row-index">{String(index + 1).padStart(2, '0')}</span>
        <h3 className="gallery-row-title">{item.title}</h3>
        <p className="gallery-row-desc">{item.desc}</p>
      </motion.div>
    </div>
  )
}

function Gallery() {
  return (
    <>
      {/* Banner */}
      <section className="gallery-banner-section">
        <div className="gallery-banner">
          <img
            src={gardenImg}
            alt="King 11 Resort"
            className="gallery-banner-image"
            loading="lazy"
          />
          <div className="gallery-banner-overlay" />

          <motion.div
            className="gallery-banner-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="gallery-banner-eyebrow">— Visual Journey &amp; Atmosphere —</span>
            <h1 className="gallery-banner-title">Moments Captured in Stillness</h1>
            <p className="gallery-banner-lede">
              Explore the living poetry of King 11 Resort — from golden dawn across
              the waters to intimate sunset dinners beneath ancient canopy trees.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section Header */}
      <motion.div
        className="gallery-section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-20%' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="gallery-section-eyebrow">— Curated Highlights —</span>
        <h2 className="gallery-section-title">Life at King 11</h2>
        <p className="gallery-section-lede">
          Immerse yourself in moments of natural serenity, refined architecture,
          and curated atmospheres captured across the King 11 estate.
        </p>
      </motion.div>

      {/* Image + Description Rows */}
      <section className="gallery-container-fluid">
        <div className="gallery-container">
          <div className="gallery-rows">
            {galleryItems.map((item, index) => (
              <GalleryRow key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

    </>
  )
}

export  default  Gallery