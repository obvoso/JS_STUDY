const API_KEY = "be6b029a295802f909614a4dba4c3d34";

function onGeoOk(position){
	const lat = position.coords.latitude;
	const lng = position.coords.longitude;
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
	fetch(url)
		.then((response) => Response.json())
		.then((data) => {
			const weatherContainer = document.querySelector("#weather first-child");
			const city = document.querySelector("#weather last-child");
			city.innerText = data.name;
			weatherContainer.innerText = `{data.weather[0].main} / ${data.main.temp}`;
		});
}
function onGeoError(position){
	alert("error");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
