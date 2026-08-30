import Navbar from './components/Navbar.jsx'
import CocktailsSection from './components/CocktailsSection.jsx'
import Footer from './components/Footer.jsx'
import StructuredData from './components/StructuredData.jsx'
import './styles/estilos.css'

function App() {
  return (
    <>
      <StructuredData />
      <Navbar />
      <CocktailsSection />
      <Footer />
    </>
  )
}

export default App
