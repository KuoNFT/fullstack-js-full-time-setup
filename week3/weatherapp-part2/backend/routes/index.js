var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');
let owmApiKey = 'c88d94bbb2c9195835e71452811315ca'

let weather = [
  { cityName: "London", description: "cloudy", main: "clouds", tempMin: 12.95, tempMax: 17.39 },
 {
   cityName: "Rio de Janeiro",
    main: "clear",
    description: "sunny",
    tempMin: 23.98,
    tempMax: 28.63,
  },
  {
    cityName: "Stockholm",
    description: "sunny",
    main: "clear",
    tempMin: 6.03,
    tempMax: 10.59,

  },
];


router.post('/weather', (req, res) => {
  if (!weather.some(e => e.cityName.toLowerCase() === req.body.cityName.toLowerCase())) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${req.body.cityName}&appid=${owmApiKey}&units=metric`)
    .then(response => response.json())
    .then(apiData => {
      const newCity = {

        cityName: apiData.name,

        main: apiData.weather[0].main,

        description: apiData.weather[0].description,

        tempMin: apiData.main.temp_min,

        tempMax: apiData.main.temp_max,

      };
  weather.push(newCity)
  res.json({result : true, weather: newCity})
  })
  } else {
    res.json({ result: false, error: 'City already saved' });
  }
});



router.get('/weather', (req, res) => {
  res.json({ weather });
});

router.get('/weather/:cityName', (req, res) => {
  const searchedWeather = weather.find(e => e.cityName === req.params.cityName);

  if (searchedWeather) {
    res.json({ result: true, weather: searchedWeather });
  } else {
    res.json({ result: false, error: 'City not found' });
  }
});

router.delete('/weather/:cityName', (req, res) => {
  const searchedWeather = weather.find(e => e.cityName === req.params.cityName);

  if (searchedWeather) {
    weather = weather.filter(e => e.cityName !== req.params.cityName);
    res.json({ result: true, weather });
  } else {
    res.json({ result: false, error: 'City not found' });
  }
});

module.exports = router;
