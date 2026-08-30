import { motion, useScroll, useTransform } from 'motion/react'

function Navbar() {
  const { scrollY } = useScroll()

  const padding = useTransform(scrollY, [0, 120], ['1rem', '0.5rem'])
  const logoWidth = useTransform(scrollY, [0, 120], ['120px', '64px'])
  const titleSize = useTransform(scrollY, [0, 120], ['1.8rem', '1.3rem'])
  const taglineSize = useTransform(scrollY, [0, 120], ['1.4rem', '1rem'])
  const background = useTransform(
    scrollY,
    [0, 120],
    ['rgba(249, 248, 246, 0.7)', 'rgba(249, 248, 246, 0.92)']
  )
  const shadow = useTransform(
    scrollY,
    [0, 120],
    ['0 0px 0px rgba(0, 0, 0, 0)', '0 6px 20px rgba(0, 0, 0, 0.08)']
  )

  return (
    <motion.header
      className="navbar-teggianese"
      style={{ paddingTop: padding, paddingBottom: padding, background, boxShadow: shadow }}
    >
      <div className="nav-content">
        <motion.img
          src="/img/logoTEGGIANESE (1).png"
          alt="Logo Il Teggianese"
          className="logo-nav"
          style={{ width: logoWidth }}
        />
        <div className="brand-info">
          <motion.h1 style={{ fontSize: titleSize }}>IL TEGGIANESE</motion.h1>
          <motion.p className="tagline" style={{ fontSize: taglineSize }}>
            Limoncello
          </motion.p>
        </div>
      </div>
    </motion.header>
  )
}

export default Navbar
