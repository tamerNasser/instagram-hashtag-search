const URL = "http://api.openweathermap.org/data/2.5/weather?q=";
const APIKEY = "&appid=9481079f5f89f0b72f0027d093f78ed5"
var city = "Nazareth"

function getTemp(city) {
  var ele = document.getElementById("temp");
  fetch(URL + city + APIKEY)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      let temp = data.main.temp - 273.15;
      console.log(temp);
      ele.innerText = Math.round(temp);
    })
}

getTemp(city);
