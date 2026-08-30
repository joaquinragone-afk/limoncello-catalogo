import cocteles from '../data/cocteles.jsx'
import CocktailCard from './CocktailCard.jsx'

function CocktailsSection() {
  return (
    <section id="cocteles">
      <div className="cocteles-container">
        <h2>Disfrutalo en Cócteles</h2>
        <p className="cocteles-intro">
          El auténtico sabor de Italia es versátil. Tocá las tarjetas para descubrir la
          receta de estos tragos refrescantes.
        </p>

        <div className="coctel-carousel">
          {cocteles.map((cocktail) => (
            <CocktailCard key={cocktail.nombre} cocktail={cocktail} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CocktailsSection
