import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaTwitterSquare} from 'react-icons/fa'

export const HeaderSocials = () => {
  return (
    <div className='header_socials'>
         <a href='https://www.linkedin.com/in/oladeji-toheeb-5a775321b/' target="_blank"><BsLinkedin /></a>
         <a href='https:://https://github.com/Tycoontripper1' target="_blank"><BsGithub /></a>
         <a href='https:://twitter.com' target="_blank"><FaTwitterSquare /></a>
    </div>
  )
}

