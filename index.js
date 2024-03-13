function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#current-temperature");
  let temperature = Math.round(response.data.temperature.current);
  let descriptionElement=document.querySelector("#condition");

  temperatureElement.innerHTML = temperature;
  descriptionElement.innerHTML=response.data.condition.description;
}
function changeCity(event) {
  event.preventDefault();

  let area = document.querySelector(".area");
  let cityInput = document.querySelector("#city");
  area.textContent = cityInput.value;
  let city = cityInput.value;

  let apiKey = "6971a13af1b8tb2ebe7419f6ba0o6bdc";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit=metric`;

  axios.get(apiUrl).then(displayTemperature);

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = document.querySelector(".current-day");
  day.innerHTML = `${days[new Date().getDay()]}`;

  let now = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  });

  document.getElementById("time").innerHTML = now;
}

let form = document.querySelector(".button");
form.addEventListener("click", changeCity);
