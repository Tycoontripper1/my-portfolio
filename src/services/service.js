import React from 'react'
import '../services/service.css'
import {BiCheck} from 'react-icons/bi'
export const Service = () => {
  return (
    <section id='service'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services_container'>
        <article className='service'>
          <div className='service_head'>
            <h3>Graphics Design</h3>
          </div>

          <ul className='service_list '>
            <li>
              <BiCheck className='service_list-icon' />
              <p>I deisgn flyers and albums at ease</p>
              </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Web Banners</p>
              </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Posters</p>
              </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Brochures</p>
              </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>PowerPoint Templates</p>
              </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Logo Design</p>
              </li>
          </ul>
        </article>
        <article className='service'>
          <div className='service_head'>
            <h3>Web development</h3>
          </div>

          <ul className='service_list '>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Web design</p>
              </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Web develpment support and maintenace</p>
              </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Web hosting</p>
              </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Web programming</p>
              </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Landing Pages</p>
              </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Web optimization</p>
              </li>
           
          </ul>
        </article>
        <article className='service'>
          <div className='service_head'>
            <h3>Digital Marketing</h3>
          </div>

          <ul className='service_list '>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Boost Local SEO</p>
              </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Build your brand to increase Revenue</p>
              </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Increase The Traffic To Your Sites</p>
              </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Link Building</p>
              </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Web Design & Development</p>
              </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Technical Seo</p>
              </li>
          </ul>
        </article>
      </div>
    </section>
  )
}
 