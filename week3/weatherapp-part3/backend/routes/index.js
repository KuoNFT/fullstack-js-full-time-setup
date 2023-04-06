var express = require("express");
var router = express.Router();
const fetch = require("node-fetch");

const OWM_API_KEY = "4810d2c7945fe82541e351ffa914d368";

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



module.exports = router;
