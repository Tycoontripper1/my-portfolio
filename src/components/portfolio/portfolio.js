import React from "react";
import { Data } from "./data";
import "./portfolio.css";

export const Portfolio = () => {
  return (
    <section id="portfolio ">
      <h5 className="text-[#191919] dark:text-[#fff] ">My React Work </h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {Data.map((item) => {
          const { id, image, title, github, demo } = item;
          return (
            <article className="portfolio_item bg-transparent dark:bg-[#2c2c6c]" key={id}>
              <div className="portfolio_image-item">
                <img src={image} alt={title} loading='lazy' />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_cta">
                <a href={github} className="btn" terget="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" terget="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
