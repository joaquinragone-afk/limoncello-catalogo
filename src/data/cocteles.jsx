const cocteles = [
  {
    nombre: 'Limoncello Chiara',
    imagen: '/img/chiara2 (1).png',
    descripcionCorta: 'Suave, luminoso y delicadamente cítrico.',
    ingredientes: [
      '1 parte Il Teggianese',
      '2 partes jugo de naranja natural',
      'Completar con soda',
      'Hielo, naranja y menta',
    ],
    preparacion:
      'Llenar un vaso con mucho hielo. Verter el limoncello y el jugo de naranja. Completar con soda y remover suavemente para integrar. Decorar con naranja y menta fresca.',
  },
  {
    nombre: 'Limoncello Tonic',
    imagen: '/img/tonic2 (1).png',
    descripcionCorta: 'Refrescante y equilibrado. Burbujeante, cítrico y ligero.',
    ingredientes: [
      '2 partes Il Teggianese',
      '3 partes Agua Tónica Premium',
      'Hielo en cubos grandes',
      'Limón y menta para decorar',
    ],
    preparacion:
      'Servir abundante hielo en un vaso. Añadir el limoncello y completar suavemente con el agua tónica para no romper la burbuja. Perfumar con la rodaja de limón y decorar con menta.',
  },
  {
    nombre: 'Amalfi Martini',
    imagen: '/img/amalfi (1).png',
    descripcionCorta: 'Elegancia Italiana, seco, cítrico y equilibrado.',
    ingredientes: [
      '1 parte Il Teggianese',
      '2 partes Vodka de buena calidad',
      'Twist de limón o cáscara',
      'Hielo',
    ],
    preparacion:
      'En una coctelera con abundante hielo, verter el limoncello y el vodka. Batir enérgicamente. Servir filtrado en una copa Martini previamente enfriada y decorar con un twist de limón.',
  },
  {
    nombre: 'Limoncello Spritz',
    imagen: '/img/limonSpritz (1).png',
    descripcionCorta: 'Vibrante y delicado, burbuja fina y notas cítricas.',
    ingredientes: [
      '2 partes Il Teggianese',
      '3 partes espumante Brut',
      'Un toque de soda',
      'Rodaja de limón o naranja',
    ],
    preparacion:
      'En un copón con mucho hielo, verter primero el limoncello. Agregar el espumante Brut y terminar con un golpe de soda. Remover suavemente de abajo hacia arriba y decorar.',
  },
  {
    nombre: 'Limoncello Verdi Menta',
    imagen: '/img/limonVerdiMenta (1).png',
    descripcionCorta: 'Dulce y fresco, menta intensa con un final vibrante.',
    ingredientes: [
      '1 parte Il Teggianese',
      'Jugo de 1/2 limón',
      '2 cditas de azúcar',
      'Menta, soda y hielo',
    ],
    preparacion:
      'Machacar suavemente la menta con el azúcar y el jugo de limón en el fondo del vaso. Agregar hielo, el limoncello y completar con soda. Remover desde el fondo.',
  },
  {
    nombre: 'Dorado del Litoral',
    imagen: '/img/elDorado (1).png',
    descripcionCorta:
      'Inspirado en el color del río Paraná al atardecer y productos del litoral.',
    ingredientes: [
      '2 partes de Il Teggianese',
      '½ parte de miel líquida',
      '1 parte de jugo de limón',
      '2/3 partes de soda o agua con gas',
      'Limón, tomillo/menta y hielo',
    ],
    preparacion:
      'Mezclar primero la miel con el jugo de limón hasta disolver. Llenar la copa con hielo, agregar limoncello, sumar la mezcla y completar con soda. Mezclar suavemente y decorar.',
  },
  {
    nombre: 'Spritz del Paraná con arándanos',
    alt: 'Spritz del Paraná',
    imagen: '/img/Arandano (1).png',
    descripcionCorta:
      'Aperitivo vibrante que une el carácter del limoncello con la frescura del arándano.',
    ingredientes: [
      '2 partes de Il Teggianese',
      '3 partes de espumante brut',
      '1 parte de soda',
      '5/6 arándanos frescos',
      '1 rodaja de limón y hielo',
    ],
    preparacion: (
      <>
        Llenar la copa con hielo y 3-4 arándanos{' '}
        <strong>(aplastá uno para darle un color rosado-violeta)</strong>. Verter
        limoncello, espumante y un toque de soda. Mezclar suavemente y decorar.
      </>
    ),
  },
  {
    nombre: 'Fragola Limoncello Spritz',
    imagen: '/img/6.png',
    descripcionCorta: 'El encuentro entre la frescura del limón y la dulzura de la frutilla.',
    ingredientes: [
      '60 ml de Limoncello Il Teggianese',
      '30 ml de jarabe de frutilla',
      '90 ml de espumante Brut',
      'Un toque de soda',
      'Frutillas frescas',
      'Hielo',
    ],
    preparacion:
      'Llenar un copón con abundante hielo. Agregar el Limoncello Il Teggianese y el jarabe de frutilla. Incorporar suavemente el espumante Brut y terminar con un toque de soda. Mezclar delicadamente para conservar las burbujas y decorar con una frutilla fresca.',
  },
  {
    nombre: 'Limoncello Ginger',
    imagen: '/img/7.png',
    descripcionCorta:
      'Fresco, cítrico y ligeramente espaciado. Ideal para acompañar con el sushi.',
    ingredientes: [
      '50 ml de Limoncello Il Teggianese',
      '80 ml de Ginger Ale',
      '10 ml de jugo de limón fresco',
      'Un toque de soda',
      'Rodaja de limón',
      'Hielo',
    ],
    preparacion:
      'Llenar un vaso con abundante hielo. Agregar el Limoncello Il Teggianese y el Ginger Ale. Incorporar suavemente el jugo de limón fresco y terminar con un toque de soda. Mezclar delicadamente para conservar las burbujas y decorar con una rodaja de limón.',
  },
  {
    nombre: 'Teggiano Collins',
    imagen: '/img/8.png',
    descripcionCorta: 'Cítrico, fresco y elegante.',
    ingredientes: [
      '45 ml de London dry gin',
      '30 ml de Limoncello Il Teggianese',
      '20 ml de jugo de limón fresco',
      '60-80 ml de soda',
      'Rodaja de limón',
      'Hielo',
    ],
    preparacion:
      'Llenar un vaso collins con abundante hielo. Agregar el gin, el Limoncello Il Teggianese y el jugo de limón fresco. Mezclar suavemente y completar con soda. Decorar con una rodaja de limón.',
  },
]

export default cocteles
