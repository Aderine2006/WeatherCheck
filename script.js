// script.js

// API Key and Base URL
const API_KEY = "660752aedbeeb1d648b2d7f303492ca4";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

document.getElementById("fetchWeather").addEventListener("click", () => {
  const city = document.getElementById("cityInput").value;
  if (city.trim() === "") {
    alert("Please enter a city name");
    return;
  }
  fetchWeatherData(city);
});

async function fetchWeatherData(city) {
  try {
    const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    if (!response.ok) {
      throw new Error("City not found");
    }
    const data = await response.json();
    displayWeatherData(data);
  } catch (error) {
    alert(error.message);
  }
}

function displayWeatherData(data) {
  const weatherBox = document.getElementById("weatherData");
  weatherBox.innerHTML = `
    <h2>${data.name}, ${data.sys.country}</h2>
    <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
    <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
    <p><strong>Condition:</strong> ${data.weather[0].description}</p>
  `;
  weatherBox.style.display = "block";
}
