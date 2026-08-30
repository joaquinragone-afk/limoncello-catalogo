import { useEffect, useState } from 'react'
import DepthCarousel from './DepthCarousel/DepthCarousel.jsx'
import RecipePanel from './RecipePanel/RecipePanel.jsx'
import ShinyText from './ShinyText/ShinyText.jsx'
import FadeInWords from './FadeInWords/FadeInWords.jsx'
import cocteles from '../data/cocteles.jsx'

const items = cocteles.map((cocktail) => ({
  image: cocktail.imagen,
  alt: cocktail.alt ?? cocktail.nombre,
}))

function CocktailsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  // El carrusel puede pasar por varios tragos en un solo gesto (swipe
  // rápido, varios taps seguidos). Si el panel de recetas animara su
  // aparición en cada paso intermedio, nunca llegaría a terminar y
  // quedaría "fantasma" (semitransparente) todo el tiempo que dura el
  // gesto. Por eso el panel usa un índice recién cuando el carrusel se
  // queda quieto un instante, no en cada cambio.
  const [displayedIndex, setDisplayedIndex] = useState(0)
  useEffect(() => {
    const id = setTimeout(() => setDisplayedIndex(activeIndex), 180)
    return () => clearTimeout(id)
  }, [activeIndex])

  const activo = cocteles[displayedIndex]

  return (
    <section id="cocteles">
      <div className="cocteles-container">
        <h2 className="cocteles-titulo">
          <ShinyText
            text="Disfrutalo en Cócteles"
            speed={3}
            color="#ffffff"
            shineColor="#ffe9a8"
            spread={80}
          />
        </h2>
        <FadeInWords
          className="cocteles-intro"
          text="El auténtico sabor de Italia es versátil. Deslizá el carrusel para descubrir la receta de estos tragos refrescantes."
        />

        <div className="coctel-showcase">
          <div className="coctel-showcase-carousel">
            <DepthCarousel
              items={items}
              cardWidth={300}
              cardHeight={400}
              radius={16}
              tint="#2b1c0e"
              depth={200}
              spread={80}
              tilt={20}
              visibleCards={4}
              falloff={0.13}
              blur={5}
              loop
              duration={650}
              onChange={(index) => setActiveIndex(index)}
            />
          </div>

          <div className="coctel-showcase-detalle">
            <RecipePanel cocktail={activo} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CocktailsSection
