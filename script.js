const currentTimeEl = document.querySelector(".current-time");
const currentDayEl = document.querySelector(".current-day");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

setInterval(() => {
  const now = new Date();

  const today = days.find((day, index) => {
    return index == now.getUTCDay();
  });

  currentTimeEl.innerHTML = `${now.toUTCString()}`;

  currentDayEl.innerHTML = `${today}`;
}, 1000);
