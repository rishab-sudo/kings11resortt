import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logoImg from '../assets/logo.png'
import './Navbar.css'

const NAV_ITEMS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Rooms', path: '/rooms' },
  { name: 'Services', path: '/#services' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (item, e) => {
    setMenuOpen(false)
    if (item.path.startsWith('/#')) {
      e.preventDefault()
      const targetId = item.path.replace('/#', '')
      if (location.pathname === '/') {
        const target = document.getElementById(targetId)
        if (target) target.scrollIntoView({ behavior: 'smooth' })
      } else {
        navigate(item.path)
      }
    }
  }

  const handleBookNow = () => {
    setMenuOpen(false)
    if (location.pathname === '/') {
      const target = document.getElementById('contact')
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    navigate('/contact')
  }

  const visibleItems = scrolled ? [NAV_ITEMS[0]] : NAV_ITEMS

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to="/" className="navbar-logo" onClick={() => setMenuOpen(false)}>
        <img src={logoImg} alt="King 11 Resort" className="navbar-logo-img" />
      </Link>

      <motion.div
        className="navbar-inner"
        layout
        transition={{ type: 'spring', stiffness: 260, damping: 30, mass: 0.7 }}
      >
        <ul className="navbar-links">
          <AnimatePresence initial={false} mode="popLayout">
            {visibleItems.map((item) => (
              <motion.li
                key={item.name}
                layout
                initial={{ opacity: 0, scale: 0.85, filter: 'blur(4px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.85, filter: 'blur(4px)' }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                {item.path.startsWith('/#') ? (
                  <a
                    href={item.path}
                    onClick={(e) => handleNavClick(item, e)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    onClick={(e) => handleNavClick(item, e)}
                  >
                    {item.name}
                  </Link>
                )}
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>

        <motion.button layout className="navbar-book-btn" onClick={handleBookNow}>
          Book Now
        </motion.button>

        <AnimatePresence initial={false}>
          {scrolled && (
            <motion.button
              key="ham-desktop"
              layout
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="navbar-hamburger navbar-hamburger-desktop"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span />
              <span />
              <span />
            </motion.button>
          )}
        </AnimatePresence>

        <button
          className="navbar-hamburger navbar-hamburger-mobile"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </motion.div>

      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            className="navbar-dropdown"
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            {NAV_ITEMS.map((item) => (
              <li key={item.name}>
                {item.path.startsWith('/#') ? (
                  <a
                    href={item.path}
                    onClick={(e) => handleNavClick(item, e)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    onClick={(e) => handleNavClick(item, e)}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar