import React from "react";
import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { FiTwitter } from "react-icons/fi";

export const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <AiOutlineMail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>Oayodeji27@gmail.com</h5>
            <a href="mailto:Oayodeji27@gmail.com">send a message</a>
          </article>
          <article className="contact_option">
            <IoLogoWhatsapp className="contact_option-icon" />
            <h4>Whatsapp</h4>
            <h5>+2348168289160</h5>
            <a href="https://api.whatsapp.com/send?phone=2348168289160">
              send a message
            </a>
          </article>
          <article className="contact_option">
            <FiTwitter className="contact_option-icon" />
            <h4>Twitter</h4>
            <h5>@oladejiolayin13</h5>
            <a href="https://twitter.com/messages/compose?recipent_id=814507482391478277">
              send a message
            </a>
          </article>
        </div>
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
