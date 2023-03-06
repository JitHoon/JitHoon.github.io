const weather = document.querySelector("#weather h2:first-child");

function onGeoOk(position) {
    // position: getCurrentPosition이 주는 object
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const APIkey = "c1e5844389c6bd9a16cb9d8bc09d605d";
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric`;

    // js 에서 해당 url get
    fetch(weatherURL)
    .then((response) => response.json())
    .then((data) => {
      weather.innerText = `${data.name} | ${data.main.temp}°C | ${data.weather[0].main}`;
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}
  
// navigator.geolocation.getCurrentPosition(위치를 찾았을 때 함수, 못 찾았을 때 함수)
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);