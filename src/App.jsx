import React from 'react'
import Contract from './Components/Contract/Contract'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Portfolio from './Components/Portfolio/Portfolio'
import Testimonial from './Components/Testimonial/Testimonial'
import Services from './Services/Services'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'
import Experience from './Components/Experience/Experience'
const App = () => {
  return (
    
    <>
      <Header></Header>
      <Navbar></Navbar>
      <About></About>
      <Experience></Experience>
      <Services></Services>
      <Portfolio></Portfolio>
      <Testimonial></Testimonial>
      <Contract></Contract>
       
      <Footer></Footer>
    </>
  )
}

export default App