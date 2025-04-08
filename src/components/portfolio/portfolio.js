import React, { useState } from "react";
import { Data } from "./data";
import "./portfolio.css";

export const Portfolio = () => {
  return (
    <section id="portfolio ">
      <h5 className="text-[#191919] dark:text-[#fff]">My React Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {Data.map((item) => (
          <PortfolioItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

const PortfolioItem = ({ item }) => {
  const { image, title, github, demo, Header } = item;
  const [showFull, setShowFull] = useState(false);

  const toggleReadMore = () => setShowFull(!showFull);

  const isLong = title.length > 150;
  const displayedTitle = showFull ? title : title.slice(0, 150);

  return (
    <article className="portfolio_item bg-transparent dark:bg-[#2c2c6c]">
      <div className="portfolio_image-item">
        <img
          src={image}
          alt={Header}
          loading="lazy"
          style={{ objectFit: "cover", width: "100%", height: "auto" }}
        />
      </div>
      <h2>{Header}</h2>
      <h3 style={{ fontSize: "12px" }}>
        {displayedTitle}
        {isLong && (
          <span
            onClick={toggleReadMore}
            style={{ color: "#007bff", cursor: "pointer", marginLeft: "5px" }}
          >
            {showFull ? " Show less" : "... Read more"}
          </span>
        )}
      </h3>
      <div className="portfolio_cta">
        <a href={github} className="btn" target="_blank" rel="noopener noreferrer">
          Github
        </a>
        <a href={demo} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
      </div>
    </article>
  );
};
