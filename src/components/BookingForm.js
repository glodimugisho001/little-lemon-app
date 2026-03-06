import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { submitAPI } from "../api";
import "../styles/BookingAppForm.css";

export default function BookingForm({
  availableTime,
  setAvailableTime,
  availableTimes,
  dispatch,
}) {
  const navigate = useNavigate();
  const [occasion, setOccasion] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState(1);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [touched, setTouched] = useState({
    date: false,
    time: false,
    guests: false,
    occasion: false,
  });

  const minDate = useMemo(() => new Date().toISOString().split("T")[0], []);

  const validateForm = useCallback(() => {
    const nextErrors = {};

    if (!date) {
      nextErrors.date = "Date is required";
    } else {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const selectedDate = new Date(date);
      if (selectedDate < today) {
        nextErrors.date = "Date cannot be in the past";
      }
    }

    if (!availableTime) {
      nextErrors.time = "Please select a time";
    }

    if (Number(guests) < 1 || Number(guests) > 10) {
      nextErrors.guests = "Guests must be between 1 and 10";
    }

    if (!occasion) {
      nextErrors.occasion = "Please select an occasion";
    }

    setErrors(nextErrors);
    const valid = Object.keys(nextErrors).length === 0;
    setIsFormValid(valid);
    return valid;
  }, [date, availableTime, guests, occasion]);

  useEffect(() => {
    validateForm();
  }, [validateForm]);

  const handleDateChange = (event) => {
    const newDate = event.target.value;
    setDate(newDate);
    setAvailableTime("");
    setTouched((prev) => ({ ...prev, date: true, time: true }));

    dispatch({
      type: "updateTimes",
      newDate,
    });
  };

  const clearForm = () => {
    setDate("");
    setAvailableTime("");
    setGuests(1);
    setOccasion("");
    setTouched({
      date: false,
      time: false,
      guests: false,
      occasion: false,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setTouched({
      date: true,
      time: true,
      guests: true,
      occasion: true,
    });

    const valid = validateForm();
    if (!valid) {
      return;
    }

    const formData = {
      date,
      time: availableTime,
      guests,
      occasion,
    };

    if (submitAPI(formData)) {
      clearForm();
      navigate("/confirmed");
    }
  };

  return (
    <div className="booking-container">
      <h2>Book a Table</h2>

      <form onSubmit={handleSubmit} className="booking-form" noValidate>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          name="date"
          value={date}
          min={minDate}
          onChange={handleDateChange}
          onBlur={() => setTouched((prev) => ({ ...prev, date: true }))}
          aria-invalid={Boolean(touched.date && errors.date)}
          aria-describedby={errors.date ? "date-error" : undefined}
          required
        />
        {touched.date && errors.date && (
          <span id="date-error" className="error-message" role="alert">
            {errors.date}
          </span>
        )}

        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          name="time"
          value={availableTime}
          onChange={(event) => setAvailableTime(event.target.value)}
          onBlur={() => setTouched((prev) => ({ ...prev, time: true }))}
          aria-invalid={Boolean(touched.time && errors.time)}
          aria-describedby={errors.time ? "time-error" : undefined}
          required
        >
          <option value="">Select a time</option>
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
        {touched.time && errors.time && (
          <span id="time-error" className="error-message" role="alert">
            {errors.time}
          </span>
        )}

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          id="guests"
          name="guests"
          placeholder="1"
          min="1"
          max="10"
          value={guests}
          onChange={(event) => setGuests(Number(event.target.value))}
          onBlur={() => setTouched((prev) => ({ ...prev, guests: true }))}
          aria-invalid={Boolean(touched.guests && errors.guests)}
          aria-describedby={errors.guests ? "guests-error" : undefined}
          required
        />
        {touched.guests && errors.guests && (
          <span id="guests-error" className="error-message" role="alert">
            {errors.guests}
          </span>
        )}

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={occasion}
          onChange={(event) => setOccasion(event.target.value)}
          onBlur={() => setTouched((prev) => ({ ...prev, occasion: true }))}
          aria-invalid={Boolean(touched.occasion && errors.occasion)}
          aria-describedby={errors.occasion ? "occasion-error" : undefined}
          required
        >
          <option value="">Select an occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Business dinner">Business dinner</option>
        </select>
        {touched.occasion && errors.occasion && (
          <span id="occasion-error" className="error-message" role="alert">
            {errors.occasion}
          </span>
        )}

        <button className="submit-button" type="submit" disabled={!isFormValid}>
          Confirm reservation
        </button>
      </form>
    </div>
  );
}
