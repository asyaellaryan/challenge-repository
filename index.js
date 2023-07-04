let currentDate = new Date();

let p = document.querySelector("p");
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[currentDate.getDay()];

let hours = currentDate.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = currentDate.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
p.innerHTML = `${day} ${hours}:${minutes}`;



function search(city) {
  let apiKey = "f5e814a04eddfab1740f07bf0328eee2";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; 
  axios.get(apiUrl).then(showTemperature);

}
function showTemperature(response) {
console.log(response.data.name);
document.querySelector("#city").innerHTML = response.data.name;
document.querySelector("#temperature").innerHTML = Math.round(response.data.main.temp);

document.querySelector("#humidity").innerHTML = response.data.main.humidity; 
document.querySelector("#wind").innerHTML = Math.round(response.data.wind.speed);
document.querySelector("#description").innerHTML = response.data.weather[0].main;
}

function handleSubmit(event) {
event.preventDefault();
let city = document.querySelector("#search-city-input").value;
search(city);
}

let searchForm = document.querySelector("#search")
searchForm.addEventListener("submit", handleSubmit);
search("New York");



//navigator.geolocation.getCurrentPosition(showLocation);
