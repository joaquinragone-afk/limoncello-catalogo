import cocteles from '../data/cocteles.jsx'

const SITE_URL = 'https://tragos.ilteggianese.com'

function toAbsoluteUrl(path) {
  return `${SITE_URL}${path}`
}

function textoPreparacion(cocktail) {
  return typeof cocktail.preparacion === 'string' ? cocktail.preparacion : cocktail.preparacionTexto
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organizacion`,
      name: 'Il Teggianese',
      description: 'Limoncello elaborado en Paraná, Entre Ríos, Argentina.',
      url: SITE_URL,
      logo: toAbsoluteUrl('/img/logoTEGGIANESE (1).png'),
      image: toAbsoluteUrl('/img/fondo.jpg'),
      email: 'contacto@ilteggianese.com',
      telephone: '+54 9 343 463-0494',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Paraná',
        addressRegion: 'Entre Ríos',
        addressCountry: 'AR',
      },
      sameAs: ['https://www.instagram.com/limoncello_ilteggianese'],
    },
    {
      '@type': 'ItemList',
      '@id': `${SITE_URL}/#tragos-con-limoncello`,
      name: 'Tragos con Limoncello Il Teggianese',
      description: 'Recetas de tragos y cócteles hechos con limoncello: Limoncello Spritz y más.',
      itemListElement: cocteles.map((cocktail, index) => ({
        '@type': 'Recipe',
        position: index + 1,
        name: cocktail.nombre,
        description: cocktail.descripcionCorta,
        image: toAbsoluteUrl(cocktail.imagen),
        recipeCategory: 'Trago',
        recipeCuisine: 'Italiana',
        keywords: `limoncello, tragos con limoncello, ${cocktail.nombre.toLowerCase()}, cóctel con limoncello`,
        recipeYield: '1 trago',
        recipeIngredient: cocktail.ingredientes,
        recipeInstructions: textoPreparacion(cocktail),
        author: {
          '@type': 'Organization',
          name: 'Il Teggianese',
        },
      })),
    },
  ],
}

function StructuredData() {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export default StructuredData
