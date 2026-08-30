import { AnimatePresence, motion } from 'motion/react'
import BlurText from '../BlurText/BlurText.jsx'

const listVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.05, delayChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
}

function RecipePanel({ cocktail }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={cocktail.nombre}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <h3>
          <BlurText
            text={cocktail.nombre}
            delay={30}
            animateBy="words"
            direction="top"
            className="coctel-nombre-animado"
          />
        </h3>

        <motion.p
          className="coctel-short-desc"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.05 }}
        >
          {cocktail.descripcionCorta}
        </motion.p>

        <div className="seccion-receta">
          <h4>Ingredientes</h4>
          <motion.ul variants={listVariants} initial="hidden" animate="show">
            {cocktail.ingredientes.map((ingrediente) => (
              <motion.li key={ingrediente} variants={itemVariants}>
                {ingrediente}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <div className="seccion-receta">
          <h4>Preparación</h4>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.2 + cocktail.ingredientes.length * 0.05 }}
          >
            {cocktail.preparacion}
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default RecipePanel
