const apiKey = "d291eb71b285612541fdb9836d0f88ce";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const userInput = document.querySelector(".input input");
const submitBtn = document.querySelector(".input button");
const weatherSign = document.querySelector("#weather-sign");

const showData = (data) => {
  document.querySelector("#temparature").textContent =
    Math.round(data.main.temp) + `°c`;
  document.querySelector("#city").textContent = data.name;
  document.querySelector("#humidity").textContent = data.main.humidity + `%`;
  document.querySelector("#wind-speed").textContent = data.wind.speed + ` km/h`;

  if (data.weather[0].main === "Clouds") {
    weatherSign.src = "img/clouds.png";
  } else if (data.weather[0].main === "Clear") {
    weatherSign.src = "img/clear.png";
  } else if (data.weather[0].main === "Rain") {
    weatherSign.src = "img/rain.png";
  } else if (data.weather[0].main === "Drizzle") {
    weatherSign.src = "img/drizzle.png";
  } else if (data.weather[0].main === "Mist") {
    weatherSign.src = "img/mist.png";
  }
};

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  const data = await response.json();
  showData(data);
}

submitBtn.addEventListener("click", () => {
  checkWeather(userInput.value);
});
