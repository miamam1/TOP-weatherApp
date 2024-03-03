import "./style.css";
// https://unsplash.com/photos/silhouette-of-trees-covered-by-fog-KT3WlrL_bsg
import background from "./background.jpg";
function handleError(fn) {
  return function (...params) {
    return fn(...params).catch(function (error) {
      console.log("YOUR STUPID, HERES WHY:", error);
    });
  };
}

async function getWeather(place) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=f5898a6f5ccf4851aa9151936241002&q=${place}&days=3`,
    { mode: "cors" }
  );
  //   im stupid, its fine for the errors to show in console literally does for all the top ones, just make sure you show the user via UI
  if (!response.ok) {
    return false;
  } else {
    const responseData = await response.json();
    return responseData;
  }
}

const safeGetWeather = handleError(getWeather);

console.log(await safeGetWeather("London"));

const headerContainer = document.createElement("div");
const header = document.createElement("h1");
header.textContent = "Weather app";
headerContainer.classList.add("headerContainer");
headerContainer.append(header);
document.body.append(headerContainer);
document.body.style.cssText = `background-image: url(${background})`;
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";
const inputContainer = document.createElement("div");
const input = document.createElement("input");
input.placeholder = "Enter your area here...";
inputContainer.classList.add("inputContainer");
inputContainer.append(input);

document.body.append(inputContainer);
input.addEventListener("keypress", (value) => {
  const duration = 1000;
  clearTimeout(input._timer);
  input._timer = setTimeout(async () => {
    if ((await safeGetWeather(input.value)) === false) {
      input.style.backgroundColor = "red";
    } else {
      const place = await safeGetWeather(input.value);
      console.log(place);
      displayWeather(
        place.location.name +
          ", " +
          place.location.region +
          ", " +
          place.location.country,
        place.current.temp_c + "°C",
        "Feels like: " + place.current.feelslike_c + "°C",
        "Wind speed: " + place.current.wind_mph + "MPH",
        "Humidity: " + place.current.humidity + "%"
      );
      input.style.backgroundColor = "transparent";
    }
  }, duration);
});

function displayWeather(placeName, currentTemp, feelsLike, wind, humidity) {
  const ContainerRemover = document.getElementsByClassName("Container");
  for (let i = 0; i < ContainerRemover.length; i++) {
    ContainerRemover[i].remove();
  }
  const Container = document.createElement("div");
  const placeNameCont = document.createElement("h1");
  const currentTempCont = document.createElement("h1");
  const feelsLikeCont = document.createElement("p");
  const windCont = document.createElement("p");
  const humidityCont = document.createElement("p");
  placeNameCont.textContent = placeName;
  currentTempCont.textContent = currentTemp;
  feelsLikeCont.textContent = feelsLike;
  windCont.textContent = wind;
  humidityCont.textContent = humidity;

  Container.classList.add("Container");
  Container.append(
    placeNameCont,
    currentTempCont,
    feelsLikeCont,
    windCont,
    humidityCont
  );
  inputContainer.append(Container);
}

const placeDefault = await safeGetWeather("UK");
displayWeather(
  placeDefault.location.name +
    ", " +
    placeDefault.location.region +
    ", " +
    placeDefault.location.country,
  placeDefault.current.temp_c + "°C",
  "Feels like: " + placeDefault.current.feelslike_c + "°C",
  "Wind speed: " + placeDefault.current.wind_mph + "MPH",
  "Humidity: " + placeDefault.current.humidity + "%"
);
