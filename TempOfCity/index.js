let onSubmitEl = document.getElementById("onClickButton");
let locationEle = document.getElementById("locationName");
let tempEl = document.getElementById("temp");
let inputEl = document.getElementById("input");

async function getTemp(searchInputVal) {
  let url = `https://api.weatherapi.com/v1/current.json?key=69f18d2d84bf42009ba124429242905&q=${searchInputVal}&aqi=yes`;
  let options = {
    method: "GET",
  };

  await fetch(url, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      return response.json();
    })
    .then((data) => {
      locationEle.textContent = `City Name: ${data.location.name}`;
      tempEl.textContent = `Temp in C: ${data.current.temp_c}`;
    });
}

function onChangeValue(event) {
  let searchInputVal = event.target.value;
  getTemp(searchInputVal);
}

onSubmitEl.addEventListener("keydown", onChangeValue);
