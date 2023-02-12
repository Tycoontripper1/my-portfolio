import React from "react";
import { Header } from "./components/header/header";
import { Navbar } from "./components/navbar/navbar";
import { About } from "./components/about/about";
import { Experience } from "./components/experience/experience";
import { Portfolio } from "./components/portfolio/portfolio";
import { Testimonials } from "./components/testimonials/testimonials";
import { Contact } from "./components/contact/contact";
import { Footer } from "./components/footer/footer";
import { Service } from "./services/service";

const App = ()=>{

  



  return(
    <div>
    <Header  />
    <Navbar />
    <About />
    <Experience />
    <Service />
    <Portfolio />
    <Testimonials />
    <Contact />
    <Footer />
  </div>
  )
 
}

export default App