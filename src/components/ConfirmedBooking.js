import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ConfirmedBooking.css';

export default function ConfirmedBooking() {
  const navigate = useNavigate();

  return (
    <div className="confirmation-container">
      <div className="confirmation-card">
        <div className="confirmation-icon">✓</div>
        <h1 className="confirmation-title">Réservation confirmée !</h1>
        <p className="confirmation-message">
          Merci pour votre réservation chez Little Lemon 🍋
        </p>
        <div className="confirmation-details">
          <p>Votre réservation a été enregistrée avec succès.</p>
          <p>Nous vous contacterons bientôt pour confirmer les détails.</p>
        </div>
        <button 
          className="back-button"
          onClick={() => navigate('/')}
        >
          Retour à l&apos;accueil
        </button>
      </div>
    </div>
  );
}
