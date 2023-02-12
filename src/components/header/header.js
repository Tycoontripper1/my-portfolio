import React from "react";
import './header.css'
import CTA from "./CTA";
import ME from '../../assets/me.png'
import { HeaderSocials } from "./headersocials";

export const Header = ({darkTheme, setDarkTheme}) =>{
   
    return(
        <header>
              <div className="container header-container">
              <button type="button" onClick={() => setDarkTheme(!darkTheme)} className="text-xl md:flex mb-6 dark:bg-gray-200 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg">{darkTheme ? '🌙 Dark' : '💡 Light'}</button>
            <h5 className="">Hello I'm</h5>
            <h2>Oladeji Toheeb</h2>
            <h5 className="text-light">Frontend Developer</h5>
            <CTA />
            <HeaderSocials />
            

            <div className="me">
                <img src={ME} alt="my-self" />
            </div>

            <a href="#contact" className="scroll_down">Scroll Down</a>

        </div>
        </header>
      
    )
   
}