import { useState } from 'react'

function CocktailCard({ cocktail }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div
      className={`coctel-card-scene${flipped ? ' girada' : ''}`}
      onClick={() => setFlipped((prev) => !prev)}
    >
      <div className="coctel-card-inner">
        <div className="coctel-card-face coctel-card-front">
          <div className="coctel-img-placeholder">
            <img
              src={cocktail.imagen}
              alt={cocktail.alt ?? cocktail.nombre}
              className="img-coctel-3d"
            />
          </div>
          <h3>{cocktail.nombre}</h3>
          <p className="coctel-short-desc">{cocktail.descripcionCorta}</p>
          <p className="click-hint">Tocá para ver ingredientes</p>
        </div>
        <div className="coctel-card-face coctel-card-back">
          <div className="seccion-receta">
            <h3>Ingredientes</h3>
            <ul>
              {cocktail.ingredientes.map((ingrediente) => (
                <li key={ingrediente}>{ingrediente}</li>
              ))}
            </ul>
          </div>
          <div className="seccion-receta">
            <h3>Preparación</h3>
            <p>{cocktail.preparacion}</p>
          </div>
          <p className="back-hint">👈 Tocá para volver</p>
        </div>
      </div>
    </div>
  )
}

export default CocktailCard
