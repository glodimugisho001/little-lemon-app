import React from "react";
import dishes from "./DataDishes";
import "../styles/HighLight.css";
import delivery from "../assets/livreur.png";

export default function HighLightSection() {
  return (
    <div className="highlight-section">
      <div className="highlight-text">
        <h2 className="highlight-title">Specials This Week</h2>
        <a className="highlight-menu-link" href="/#menu" aria-label="See online menu">
          Online menu
        </a>
      </div>

      <div className="highlight-container">
        {dishes.map(({ nom, price, description, image }) => (
          <article className="highlight-card" key={nom}>
            <img src={image} alt={nom} loading="lazy" />
            <div className="highlight-card-description">
              <div className="highlight-name">
                <h3>{nom}</h3>
                <span>${price.toFixed(2)}</span>
              </div>
              <p>{description}</p>
              <div className="highlight-button-delivery">
                <button type="button" aria-label={`Order ${nom} for delivery`}>
                  Order a delivery
                </button>
                <img src={delivery} alt="Delivery icon" loading="lazy" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
