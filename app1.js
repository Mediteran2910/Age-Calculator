const userDay = document.querySelector("#userDay");
const userMonth = document.querySelector("#userMonth");
const userYear = document.querySelector("#userYear");
const spanDay = document.querySelector("#spanDay");
const spanMonth = document.querySelector("#spanMonth");
const spanYear = document.querySelector("#spanYear");
const button = document.querySelector("button");
const dayErr = document.querySelector("#dayErr");
const monthErr = document.querySelector("#monthErr");
const yearErr = document.querySelector("#yearErr");
const labelDay = document.querySelector("#labelDay");
const labelMonth = document.querySelector("#labelMonth");
const labelYear = document.querySelector("#labelYear");

const currentDate = new Date();

const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
const currentDay = currentDate.getDate();
const fullDate = new Date(currentYear, currentMonth, currentDay, 0, 0, 0, 0);
console.log(fullDate);

function calculateDifference() {
  let userDate = new Date(
    userYear.value,
    userMonth.value - 1,
    userDay.value,
    0,
    0,
    0,
    0,
  );
  let differenceMs = Math.abs(fullDate - userDate);
  const oneDay = 1000 * 60 * 60 * 24;
  const oneMonth = oneDay * 30.44;
  const oneYear = oneDay * 365.25;
  const years = Math.floor(differenceMs / oneYear);
  const months = Math.floor((differenceMs % oneYear) / oneMonth);
  const days = Math.floor((differenceMs % oneMonth) / oneDay);
  return { years, months, days };
}

function calculatedResults(years, months, days) {
  spanDay.innerText = days;
  spanMonth.innerText = months;
  spanYear.innerText = years;
}

function preventResults() {
  spanDay.innerText = "--";
  spanMonth.innerText = "--";
  spanYear.innerText = "--";
}

function showError(input, errorElement, labelColor, errorMessage) {
  preventResults();
  errorElement.innerText = errorMessage;
  errorElement.style.display = "block";
  input.style.borderColor = "red";
  labelColor.style.color = "red";
}

function resetError(input, errorElement, labelColor) {
  errorElement.style.display = "none";
  input.style.borderColor = "";
  labelColor.style.color = "hsl(0, 1%, 44%)";
}

button.addEventListener("click", function () {
  const { years, months, days } = calculateDifference();
  calculatedResults(years, months, days);
  let userDate = new Date(
    userYear.value,
    userMonth.value - 1,
    userDay.value,
    0,
    0,
    0,
    0,
  );

  if (userDay.value === "") {
    showError(userDay, dayErr, labelDay, "This field is required");
  } else if (userDay.value <= 0 || userDay.value > 31 || isNaN(userDay.value)) {
    showError(userDay, dayErr, labelDay, "Must be valid input");
  } else if (userDate > currentDate) {
    showError(userDay, dayErr, labelDay, "Must be in the past");
  } else {
    resetError(userDay, dayErr, labelDay);
  }

  if (userMonth.value === "") {
    showError(userMonth, monthErr, labelMonth, "This field is required");
  } else if (
    userMonth.value <= 0 ||
    userMonth.value > 12 ||
    isNaN(userMonth.value)
  ) {
    showError(userMonth, monthErr, labelMonth, "Must be valid input");
  } else if (userDate > currentDate) {
    showError(userMonth, monthErr, labelMonth, "Must be in the past");
  } else {
    resetError(userMonth, monthErr, labelMonth);
  }

  if (userYear.value === "") {
    showError(userYear, yearErr, labelYear, "This field is required");
  } else if (userYear.value <= 0 || isNaN(userYear.value)) {
    showError(userYear, yearErr, labelYear, "Must be valid input");
  } else if (userDate > currentDate) {
    showError(userYear, yearErr, labelYear, "Must be in the past");
  } else {
    resetError(userYear, yearErr, labelYear);
  }
});
