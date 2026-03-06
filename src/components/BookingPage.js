import React, { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "./BookingForm";
import { initializeTimes, updateTimes } from "./TimeReducer";

export default function BookingPage() {
  const navigate = useNavigate();

  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const [availableTime, setAvailableTime] = useState("");

  return (
    <>
      <button className="booking-back-button" type="button" onClick={() => navigate("/")}>
        Back to homepage
      </button>

      <BookingForm
        availableTime={availableTime}
        setAvailableTime={setAvailableTime}
        dispatch={dispatch}
        availableTimes={availableTimes}
      />
    </>
  );
}
