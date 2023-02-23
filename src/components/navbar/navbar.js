import React from "react";
import { useState } from "react";
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {MdContacts} from 'react-icons/md'
import { motion } from "framer-motion";
import './navbar.css'

export const Navbar = () =>{
    const cardVariants = {
        hidden: {
          
          opacity:0,
        },
        show: {
          
          opacity:1,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration:4,
          }
        }
      };
    const [activeState, setActiveState]= useState('#')
    return(
        <motion.nav variants={cardVariants} initial='hidden' whileInView="show" viewport={{ once: true, amount: 0 }} transition={{ ease: "easeOut", duration: 2 }}>
        <a href="#" onClick={()=>setActiveState("#")} className={activeState === "#"? 'active': ''}><AiOutlineHome /></a>
        <a href="#about" onClick={()=>setActiveState("#about")} className={activeState === "#about"? 'active': ''} ><AiOutlineUser /></a>
        <a href="#experience"onClick={()=>setActiveState("#experience")} className={activeState === "#experience"? 'active': ''} ><BiBook /></a>
        <a href="#service"onClick={()=>setActiveState("#service")} className={activeState === "#service"? 'active': ''} ><AiOutlineHome /></a>
        <a href="#contact" onClick={()=>setActiveState("#contact")} className={activeState === "#contact"? 'active': ''} ><MdContacts /></a>
        </motion.nav>
       
    )
    
}