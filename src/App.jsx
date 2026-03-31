import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Servis from './Components/Servis/Servis'
import MyWorks from './Components/MyWorks/MyWorks'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Servis />
      <MyWorks />
      <Contact />
      <Footer />
    </div>
  )
}

export default App