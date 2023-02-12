import React from "react";
import './header.css'
import CTA from "./CTA";
import ME from '../../assets/me.png'
import { HeaderSocials } from "./headersocials";

export const Header = () =>{
    return(
        <header>
              <div className="container header-container">
             
            <h5>Hello I'm</h5>
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