import { motion, useScroll, useTransform } from 'motion/react'

function Navbar() {
  const { scrollY } = useScroll()

  const padding = useTransform(scrollY, [0, 120], ['1rem', '0.5rem'])
  const scale = useTransform(scrollY, [0, 120], [1, 0.8])
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
      {/* El tamaño base de cada elemento lo sigue definiendo el CSS
          (incluidos los media queries); acá solo escalamos el bloque
          entero, así el achique por scroll no le gana a lo responsive. */}
      <motion.div className="nav-content" style={{ scale }}>
        <img src="/img/logoTEGGIANESE (1).png" alt="Logo Il Teggianese" className="logo-nav" />
        <div className="brand-info">
          <h1>IL TEGGIANESE</h1>
          <p className="tagline">Limoncello</p>
        </div>
      </motion.div>
    </motion.header>
  )
}

export default Navbar
