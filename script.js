let city='a',result;
let cityError = document.querySelector(".error-city-details");
let inputCity = document.querySelector(".input-city");
let showWeather = document.querySelector(".show-weather");

let currentCityName = document.querySelector(".current-city-name");
let windSpeed = document.querySelector(".windValue");
let humidityValue = document.querySelector(".humidityValue");
let currentTemparature = document.querySelector(".temp");
let weatherImage = document.querySelector(".weatherImage");

//	weather data from api

const options = {
	method: 'GET',
	headers: {
		'content-type': 'application/octet-stream',
		'X-RapidAPI-Key': 'af2bf8cf64msh54f15359515fd38p1ef480jsna67a80d7d4e5',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
}

// city input
function SearchClick(){
	city = document.getElementById("city-name").value;

	if(city === '') 
	{
		cityError.classList.remove("hidden");
		cityError.innerHTML = "⚠️ Please enter a city name";
	}	

	else
	{
		inputCity.classList.add("hidden");
		showWeather.classList.remove("hidden");	
		print();
	}
}

function errorHide(){
	cityError.classList.add("hidden");
}

document.querySelector(".input-box").addEventListener('click',errorHide);

// search button click listener
document.querySelector(".search-box").addEventListener('click',SearchClick);

// data fetching

function print(){
	let url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;			


	(async()=>{
		try {
			const response = await fetch(url, options);
			result = await response.json();
			console.log(result);
		} 
		
		catch (error) {
			console.error(error);	
		}
		
		currentTemparature.innerText = result.temp;
		humidityValue.innerHTML = result.humidity;
		windSpeed.innerHTML = result.wind_speed;

		if(result.cloud_pct >=5 && result.cloud_pct <=70)
		weatherImage.src = './sun and cloud.png'

		else if(result.cloud_pct >70)
		weatherImage.src = "./cloud.png";

		else
		weatherImage.src = "./sun.png";
	})()


	currentCityName.innerHTML = city;
}

