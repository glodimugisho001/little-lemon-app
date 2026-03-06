import { fetchAPI } from "../api";

export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

export const updateTimes = (state, action) => {
  if (action.type === "updateTimes") {
    const nextDate = action.newDate ?? action.NewDate;
    if (!nextDate) {
      return state;
    }
    return fetchAPI(nextDate);
  }

  return state;
};
