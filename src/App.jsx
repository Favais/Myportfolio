import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Skills from './Components/Skills/Skills'
import Experience from './Components/Experience/Experience'
import Aboutme from './Components/Aboutme/Aboutme'
import Projects from './Components/Projects/Projects'
import Testimonial from './Components/Testimonial/Testimonial'
import Contactme from './Components/Contactme/Contactme'
import Footer from './Components/Footer/Footer'
import { BrowserRouter, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

function App() {
  const location = useLocation();

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    logPageView(location.pathname + location.search);
  }, [location]);
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
