const WEATHER_API = "http://api.openweathermap.org/data/2.5/weather?q=";
const API_KEY = "&appid=9481079f5f89f0b72f0027d093f78ed5"
const CITY_DEFAULT = "Nazareth"

function getTemp(city) {
  let ele = document.getElementById("temp");
  fetch(WEATHER_API + city + API_KEY)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      let temp = data.main.temp - 273.15;
      ele.innerText = Math.round(temp);
    })
    .catch(function(error){
      console.log(error);
    })
}

getTemp(CITY_DEFAULT);
