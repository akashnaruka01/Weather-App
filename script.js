
const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi`;

const options = {
	method: 'GET',
	headers: {
		'content-type': 'application/octet-stream',
		'X-RapidAPI-Key': 'af2bf8cf64msh54f15359515fd38p1ef480jsna67a80d7d4e5',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

(async()=>{
try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
})();