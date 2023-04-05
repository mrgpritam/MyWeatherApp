const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '63e5ebda8amsh0157cb91a80de37p1e8c3cjsn2cdd999dd956',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) => {
	cityName.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then(response => {
			console.log(response)
			cloud_pct.innerHTML = response.cloud_pct
			temp.innerHTML = response.temp
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			min_temp.innerHTML = response.min_temp
			max_temp.innerHTML = response.max_temp
			wind_speed.innerHTML = response.wind_speed
			sunrise.innerHTML = response.sunrise
			sunset.innerHTML = response.sunset
		})
		.catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
	e.preventDefault()
	getWeather(city.value)
})

getWeather("Kolkata")

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Tokyo', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		temp2.innerHTML = response.temp
		feels_like2.innerHTML = response.feels_like
		humidity2.innerHTML = response.humidity
		min_temp2.innerHTML = response.min_temp
		max_temp2.innerHTML = response.max_temp
	})
	.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New York', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		temp3.innerHTML = response.temp
		feels_like3.innerHTML = response.feels_like
		humidity3.innerHTML = response.humidity
		min_temp3.innerHTML = response.min_temp
		max_temp3.innerHTML = response.max_temp
	})
	.catch(err => console.error(err));