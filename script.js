const currentTimeEl = document.querySelector(".current-time");
const currentDayEl = document.querySelector(".current-day");
const now = new Date();

setInterval(() => {
  currentTimeEl.innerHTML = `${now.toUTCString()}`;
  //   console.log("1");
}, 1000);

currentDayEl.innerHTML = `${now.getDay()}`;
console.log(now.toLocaleDateString);
