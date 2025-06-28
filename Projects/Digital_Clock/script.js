const hoursMinutes = document.querySelector("#hours-minutes");
const AntePost = document.querySelector("#Ante-post");
const seconds = document.querySelector("#seconds");
const monthDay = document.querySelector("#month-day");
const toggleSwitch = document.querySelector(".switch");

setInterval(() => {
  let date = new Date();

  // Get AM/PM
  AntePost.textContent = date.getHours() >= 12 ? "PM" : "AM";

  // Get 12-hour format hours
  let hours = date.getHours() % 12;
  hours = hours === 0 ? 12 : hours;

  // Format time
  const Hours = String(hours).padStart(2, "0");
  const Minutes = String(date.getMinutes()).padStart(2, "0");
  const Seconds = String(date.getSeconds()).padStart(2, "0");

  hoursMinutes.innerHTML = `${Hours} : ${Minutes}`;
  seconds.textContent = Seconds;

  // Format date
  const monthName = new Intl.DateTimeFormat("en-US", { month: "long" }).format(date);
  const weekdays = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);

  monthDay.textContent = `${monthName}, ${weekdays} ${date.getDate()}`;
}, 1000);



// const hoursMinutes = document.querySelector("#hours-minutes");
// const AntePost = document.querySelector("#Ante-post");
// const seconds = document.querySelector("#seconds");
// const monthDay = document.querySelector("#month-day");
// const toggleSwitch = document.querySelector(".switch"); // Toggle button

// let is24HourFormat = false; // Flag to track format mode

// setInterval(() => {
//   let date = new Date();

//   // Determine hour format
//   let hours = is24HourFormat ? date.getHours() : (date.getHours() % 12 || 12);
//   const Minutes = String(date.getMinutes()).padStart(2, "0");
//   const Seconds = String(date.getSeconds()).padStart(2, "0");

//   hoursMinutes.innerHTML = `${String(hours).padStart(2, "0")} : ${Minutes}`;
//   seconds.textContent = Seconds;

//   // Show AM/PM only in 12-hour format
//   AntePost.textContent = is24HourFormat ? "" : date.getHours() >= 12 ? "PM" : "AM";

//   // Format date
//   const monthName = new Intl.DateTimeFormat("en-US", { month: "long" }).format(date);
//   const weekdays = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);

//   monthDay.textContent = `${monthName}, ${weekdays} ${date.getDate()}`;
// }, 1000);

// // Toggle format on button click
// toggleSwitch.addEventListener("click", () => {
//   is24HourFormat = !is24HourFormat; // Switch modes
// });