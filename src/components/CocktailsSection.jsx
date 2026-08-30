import { useState } from 'react'
import DepthCarousel from './DepthCarousel/DepthCarousel.jsx'
import cocteles from '../data/cocteles.jsx'

const items = cocteles.map((cocktail) => ({
  image: cocktail.imagen,
  alt: cocktail.alt ?? cocktail.nombre,
}))

function CocktailsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activo = cocteles[activeIndex]

  return (
    <section id="cocteles">
      <div className="cocteles-container">
        <h2>Disfrutalo en Cócteles</h2>
        <p className="cocteles-intro">
          El auténtico sabor de Italia es versátil. Deslizá el carrusel para descubrir la
          receta de estos tragos refrescantes.
        </p>

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
              falloff={0.2}
              blur={5}
              loop
              duration={650}
              onChange={(index) => setActiveIndex(index)}
            />
          </div>

          <div className="coctel-showcase-detalle">
            <h3>{activo.nombre}</h3>
            <p className="coctel-short-desc">{activo.descripcionCorta}</p>

            <div className="seccion-receta">
              <h3>Ingredientes</h3>
              <ul>
                {activo.ingredientes.map((ingrediente) => (
                  <li key={ingrediente}>{ingrediente}</li>
                ))}
              </ul>
            </div>

            <div className="seccion-receta">
              <h3>Preparación</h3>
              <p>{activo.preparacion}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CocktailsSection
