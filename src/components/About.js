import React from "react";
import marioAndAdrianA from "../assets/Mario and Adrian A.webp";
import marioAndAdrianB from "../assets/Mario and Adrian B.webp";
import "../styles/About.css";

export default function About() {
  return (
    <div className="about-section">
      <div className="about-text-content">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          Little Lemon is a family-owned Mediterranean restaurant focused on
          handcrafted dishes, fresh ingredients, and warm service.
        </p>
      </div>

      <div className="about-images">
        <img
          src={marioAndAdrianA}
          alt="Owners Mario and Adrian in the Little Lemon kitchen"
          className="about-img-a"
          loading="lazy"
        />
        <img
          src={marioAndAdrianB}
          alt="Mario and Adrian preparing food at Little Lemon"
          className="about-img-b"
          loading="lazy"
        />
      </div>
    </div>
  );
}
