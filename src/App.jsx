import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Skills from './Components/Services/Skills'
import Experience from './Components/Experience/Experience'
import Aboutme from './Components/Aboutme/Aboutme'
import Projects from './Components/Projects/Projects'
import Testimonial from './Components/Testimonial/Testimonial'
import Contactme from './Components/Contactme/Contactme'
import Footer from './Components/Footer/Footer'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Hero />
        <Skills />
        <Experience />
        <Aboutme />
        <Projects />
        <Testimonial />
        <Contactme />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
