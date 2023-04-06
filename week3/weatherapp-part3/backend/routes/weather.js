var express = require("express");
var router = express.Router();
const fetch = require("node-fetch");
const City = require('../models/cities')



router.post("/", (req, res) => {
    if (!weather.some(e => e.cityName.toLowerCase() === req.body.cityName.toLowerCase())) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${req.body.cityName}&appid=${OWM_API_KEY}&units=metric`)
        .then(response => response.json())
        .then(apiData => {
          const newCity = {
            cityName: apiData.name,
            main: apiData.weather[0].main,
            description: apiData.weather[0].description,
            tempMin: apiData.main.temp_min,
            tempMax: apiData.main.temp_max,
          };
  
          weather.push(newCity);
          res.json({ result: true, weather: newCity });
        });
    } else {
      res.json({ result: false, error: "City already saved" });
    }
  });
  
  router.get("/", (req, res) => {
    res.json({ weather });
  });
  
  router.get("/:cityName", (req, res) => {
    const searchedWeather = weather.find(
      e => e.cityName.toLowerCase() === req.params.cityName.toLowerCase()
    );
    if (searchedWeather) {
      res.json({ result: true, weather: searchedWeather });
    } else {
      res.json({ result: false, error: "City not found" });
    }
  });
  
  router.delete("/weather/:cityName", (req, res) => {
    const searchedWeather = weather.find(
      e => e.cityName.toLowerCase() === req.params.cityName.toLowerCase()
    );
    if (searchedWeather) {
      weather = weather.filter(
        e => e.cityName.toLowerCase() !== req.params.cityName.toLowerCase()
      );
      res.json({ result: true, weather });
    } else {
      res.json({ result: false, error: "City not found" });
    }
  });


  
module.exports = router;