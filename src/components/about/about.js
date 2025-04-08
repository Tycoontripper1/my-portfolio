import React from "react";
import "./about.css";
import ME from "../../assets/me2.png";
import { FiAward } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { CgFolder } from "react-icons/cg";

export const About = () => {
  return (
    <section id="about">
      <h5 className="text-[#191919] dark:text-[#fff]">Get To Know</h5>
      <h2 >About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="myself" loading="lazy" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card  bg-transparent dark:bg-[#2c2c6c] dark:border-transparent ">
              <FiAward className="about_icon" />
              <h5>Experience</h5>
              <small className="text-[#191919] dark:text-[#fff] text-center">3+ years working</small>
            </article>
            <article className="about_card bg-transparent dark:bg-[#2c2c6c] dark:border-transparent ">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small className="text-[#191919] dark:text-[#fff] text-center">worldwide client</small>
            </article>
            <article className="about_card bg-transparent dark:bg-[#2c2c6c] dark:border-transparent ">
              <CgFolder className="about_icon" />
              <h5>Project</h5>
              <small className="text-[#191919] dark:text-[#fff] text-center">10+  completed</small>
            </article>
          </div>

          <p className="text-[#191919] dark:text-[rgba(255,255,255,0.6)]">
          Highly motivated Frontend developer with experience in building and optimizing user-centric web applications. Skilled in
 React, Next.js, JavaScript, and modern UI frameworks, I have a keen eye for detail and a strong focus on performance,
 accessibility, and responsive design. Experienced in translating designs into pixel-perfect interfaces, debugging complex
 issues, and enhancing user experiences. Passionate about staying up to date with the latest frontend technologies and
 continuously improving development workflows. Excellent problem-solving and communication skills, with a strong ability to
 collaborate in dynamic team environments.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};
