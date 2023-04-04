import React,  {useState}  from "react";
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

  

  const [darkTheme, setDarkTheme] = useState(false)

  return(
    <div className={darkTheme ? 'dark': ''}>
      <div className="bg-gray-100 dark:bg-[#1f1f38] dark:text-[#fff]  text-[#191919] ">
      <Header darkTheme={darkTheme} setDarkTheme= {setDarkTheme}  />
    <Navbar  />
    <About />
    <Experience />
    <Service />
    <Portfolio />
    <Testimonials />
    <Contact />
    <Footer />
      </div>

  </div>
  )
 
}

export default App