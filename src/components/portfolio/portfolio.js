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
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <article className="portfolio_item bg-transparent dark:bg-[#2c2c6c]" >
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
          {title.length > 150 ? title.slice(0, 150) + "..." : title}
          {title.length > 150 && (
            <span
              onClick={() => setModalOpen(true)}
              style={{ color: "#007bff", cursor: "pointer", marginLeft: "5px" }}
            >
              Read more
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

      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        image={image}
        header={Header}
        description={title}
      />
    </>
  );
};
export const Modal = ({ isOpen, onClose, image, header, description }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal_overlay")) {
      onClose();
    }
  };

  return (
    <div className="modal_overlay" onClick={handleOverlayClick}>
      <div className="modal_content" onClick={(e) => e.stopPropagation()}>
        <button className="modal_close" onClick={onClose}>
          &times;
        </button>
        <img src={image} alt={header} />
        <h2 >{header}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};


