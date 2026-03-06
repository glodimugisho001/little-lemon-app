import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BookingForm from "./components/BookingForm";
import { initializeTimes, updateTimes } from "./components/TimeReducer";
import * as api from "./api";

function renderBookingForm(overrides = {}) {
  const dispatch = overrides.dispatch ?? jest.fn();
  const availableTimes = overrides.availableTimes ?? ["17:00", "18:00"];

  function Wrapper() {
    const [availableTime, setAvailableTime] = React.useState(
      overrides.availableTime ?? ""
    );

    return (
      <MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <BookingForm
          availableTime={availableTime}
          setAvailableTime={setAvailableTime}
          availableTimes={availableTimes}
          dispatch={dispatch}
        />
      </MemoryRouter>
    );
  }

  render(<Wrapper />);
  return { dispatch };
}

afterEach(() => {
  jest.restoreAllMocks();
});

describe("initializeTimes", () => {
  test("returns the available times fetched for today", () => {
    const fetchSpy = jest
      .spyOn(api, "fetchAPI")
      .mockReturnValue(["17:00", "18:00"]);

    const result = initializeTimes();

    expect(result).toEqual(["17:00", "18:00"]);
    expect(fetchSpy).toHaveBeenCalledTimes(1);
  });
});

describe("updateTimes", () => {
  test("updates available times when a new date is provided", () => {
    const newDate = "2026-06-15";
    const fetchSpy = jest
      .spyOn(api, "fetchAPI")
      .mockReturnValue(["18:00", "19:30"]);

    const result = updateTimes([], {
      type: "updateTimes",
      newDate,
    });

    expect(result).toEqual(["18:00", "19:30"]);
    expect(fetchSpy).toHaveBeenCalledWith(newDate);
  });

  test("returns current state for unknown actions", () => {
    const currentState = ["17:00", "18:00"];

    const result = updateTimes(currentState, { type: "unknownAction" });

    expect(result).toEqual(currentState);
  });
});

describe("Booking form validation", () => {
  test("date field is required", () => {
    renderBookingForm();
    expect(screen.getByLabelText(/choose date/i)).toHaveAttribute("required");
  });

  test("time field is required", () => {
    renderBookingForm();
    expect(screen.getByLabelText(/choose time/i)).toHaveAttribute("required");
  });

  test("guests input has min=1 and max=10", () => {
    renderBookingForm();
    const guestsInput = screen.getByLabelText(/number of guests/i);

    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
    expect(guestsInput).toHaveAttribute("required");
  });

  test("occasion field is required", () => {
    renderBookingForm();
    expect(screen.getByLabelText(/occasion/i)).toHaveAttribute("required");
  });

  test("shows an error if date is in the past", () => {
    renderBookingForm();
    const dateInput = screen.getByLabelText(/choose date/i);

    fireEvent.change(dateInput, { target: { value: "2023-01-01" } });
    fireEvent.blur(dateInput);

    expect(screen.getByText(/date cannot be in the past/i)).toBeInTheDocument();
  });

  test("shows an error if guests are out of bounds", () => {
    renderBookingForm();
    const guestsInput = screen.getByLabelText(/number of guests/i);

    fireEvent.change(guestsInput, { target: { value: "11" } });
    fireEvent.blur(guestsInput);

    expect(
      screen.getByText(/guests must be between 1 and 10/i)
    ).toBeInTheDocument();
  });

  test("submit button is disabled when form is invalid", () => {
    renderBookingForm();
    expect(screen.getByRole("button", { name: /confirm reservation/i })).toBeDisabled();
  });
});

