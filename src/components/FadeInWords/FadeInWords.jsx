import { motion } from 'motion/react'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.035, delayChildren: 0.3 },
  },
}

const word = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

function FadeInWords({ text, className = '', as: Component = motion.p }) {
  const words = text.split(' ')

  return (
    <Component
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
      style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
    >
      {words.map((wordText, index) => (
        <motion.span
          key={`${wordText}-${index}`}
          variants={word}
          style={{ marginRight: '0.3em' }}
        >
          {wordText}
        </motion.span>
      ))}
    </Component>
  )
}

export default FadeInWords
