import React from "react";
import { Link } from "react-router-dom";
import restaurant from "../assets/restauranfood.jpg";
import "../styles/HeroSection.css";

export default function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-overlay">
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Family-owned Mediterranean cuisine crafted with traditional recipes
            and a modern touch.
          </p>
          <Link className="reserve-button" to="/booking">
            Book a table
          </Link>
        </div>

        <div className="hero-image">
          <img
            src={restaurant}
            alt="A dish served at Little Lemon"
            width="420"
            height="520"
            fetchPriority="high"
          />
        </div>
      </div>
    </div>
  );
}
