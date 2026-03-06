import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ConfirmedBooking.css";

export default function ConfirmedBooking() {
  const navigate = useNavigate();

  return (
    <div className="confirmation-container">
      <div className="confirmation-card">
        <div className="confirmation-icon">✓</div>
        <h1 className="confirmation-title">Reservation confirmed</h1>
        <p className="confirmation-message">
          Thank you for booking a table at Little Lemon.
        </p>
        <div className="confirmation-details">
          <p>Your reservation was successfully submitted.</p>
          <p>We look forward to welcoming you soon.</p>
        </div>
        <button
          type="button"
          className="confirmation-back-button"
          onClick={() => navigate("/")}
        >
          Back to homepage
        </button>
      </div>
    </div>
  );
}
