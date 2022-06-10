import React from 'react'
import Contact from './Components/Contact/Contact'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Portfolio from './Components/Portfolio/Portfolio'
import Testimonial from './Components/Testimonial/Testimonial'
import Services from './Services/Services'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'
import Experience from './Components/Experience/Experience'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      <Contact></Contact>

      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App