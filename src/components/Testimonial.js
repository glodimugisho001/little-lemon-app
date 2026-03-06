import React, { useRef } from "react";
import testimonials from "./datatestimonials";
import "../styles/Testimonial.css";

export default function Testimonial() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) {
      return;
    }

    const scrollAmount = 300;
    const delta = direction === "left" ? -scrollAmount : scrollAmount;
    container.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <div className="testimonial-container">
      <div className="testimonial-section">
        <h2>What Our Customers Say</h2>

        <div className="testimonial-carousel-wrapper">
          <button
            type="button"
            className="scroll-btn left"
            onClick={() => scroll("left")}
            aria-label="Scroll testimonials left"
          >
            ←
          </button>

          <div className="testimonial-carousel" ref={scrollRef}>
            {testimonials.map(({ name, id, image, rating, review }) => (
              <article key={id} className="testimonial-card">
                <img src={image} alt={`${name} profile`} loading="lazy" />
                <h3>{name}</h3>
                <p>Rating: {rating}/5</p>
                <p>{review}</p>
              </article>
            ))}
          </div>

          <button
            type="button"
            className="scroll-btn right"
            onClick={() => scroll("right")}
            aria-label="Scroll testimonials right"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
