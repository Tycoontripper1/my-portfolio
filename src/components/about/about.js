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
              <small className="text-[#191919] dark:text-[#fff] text-center">2+ years working</small>
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
            Front-End Developer with a proven ability to collaborate effectively
            with senior developers while spending extra time to be mentored.
            Enjoy working closely with team members to ensure workloads are
            effectively redirected to bottlenecks and personally picking up the
            slack when necessary. With a passion for both personal growth and
            web development, I attended coding boot camps to learn new languages
            while sharpening existing skills. Ready to apply my passion for
            coding to a talented engineering team to develop quality solutions.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};
