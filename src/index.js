import "./style.css";
// https://unsplash.com/photos/silhouette-of-trees-covered-by-fog-KT3WlrL_bsg
import background from "./background.jpg"
function handleError(fn) {
  return function (...params) {
    return fn(...params).catch(function (error) {
      console.log("YOUR STUPID, HERES WHY:", error);
    });
  };
}


async function getWeather(place) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=f5898a6f5ccf4851aa9151936241002&q=${place}&days=3`,
    { mode: "cors" }
  )
    //   im stupid, its fine for the errors to show in console literally does for all the top ones, just make sure you show the user via UI
     if( !response.ok) {
        return false
    } else {
        const responseData = await response.json();
        return responseData;
}
    }




const safeGetWeather = handleError(getWeather);

console.log(await safeGetWeather("London"));

const headerContainer = document.createElement("div")
const header = document.createElement("h1")
header.textContent = "Weather app"
headerContainer.classList.add("headerContainer")
headerContainer.append(header)
document.body.append(headerContainer)
document.body.style.cssText = `background-image: url(${background})`
document.body.style.backgroundRepeat = 'no-repeat'
document.body.style.backgroundSize = 'cover'
const input = document.createElement("input");
input.placeholder = "Enter your area here..."
document.body.append(input);
 input.addEventListener("keypress", (value) => {
  const duration = 1000;
  clearTimeout(input._timer);
  input._timer = setTimeout(async () => {
    
    if(await safeGetWeather(input.value) === false) {
        input.style.backgroundColor = "red"
    } else {
        const place = await safeGetWeather(input.value)
        // some of the propertie names are weird and underscores and i cant access them cus cus it shoiws undefined, need to find the correct property names prolly on documentation 
        // console.log(item.current.humidity)
        // key downs are weird sometime could be better to do an submit button that you can activate via the enter key like the top examp 
        console.log(place.current.temp_c)
        input.style.backgroundColor = "transparent"
    }
  }, duration);
});


