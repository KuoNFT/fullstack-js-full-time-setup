var express = require('express');
var router = express.Router();

let weather = [
  { cityName: 'London', description: 'cloudy', tempMin: 12.95, tempMax: 17.39 },
  { cityName: 'Rio de Janeiro', description: 'sunny', tempMin: 23.98, tempMax: 28.63 },
  { cityName: 'Stockholm', description: 'sunny', tempMin: 6.03, tempMax: 10.59 },
];

router.post('/weather', (req, res)=> {
  if (!weather.some (e=> e.cityName.toLowerCase() === req.body.cityName.toLowerCase())) {
    const newCity= {
      cityName: req.body.cityName, 
      description: req.body.description,
      tempMin: req.body.tempMin,
      tempMax: req.body.tempMax
    }
    weather.push(newCity)
        res.json({ result: true, weather: newCity });
    } else {
        res.json({ result: false, error: "City already saved" });
    }
  })
 ;

// POST /weather - Sample result: 
/*{
  "result": true,
  "weather": {
    "cityName": "Lille",
    "description": "sunny",
    "tempMin": "15.2",
    "tempMax": "22.7"
  }
} 
OR
{
  "result": false,
  "error": "City already saved"
}
*/

router.get('/weather', (req, res)=>{
  if(req.body.cityName){
  res.json({result : true, weather: weather})
  } else {
    res.json({result : false})
  }
})

// GET /weather - Sample result: 
/*{
  "weather": [
    {
      "city": "London",
      "description": "cloudy",
      "tempMin": 12.95,
      "tempMax": 17.39
    },
    {
      "city": "Rio de Janeiro",
      "description": "sunny",
      "tempMin": 23.98,
      "tempMax": 28.63
    },
    {
      "city": "Stockholm",
      "description": "sunny",
      "tempMin": 6.03,
      "tempMax": 10.59
    }
  ]
} */


//router.get('/weather/:cityName', (req, res){
//  let 
//})

// GET /weather/:cityName - Sample result: 
/*{
  "result": true,
  "weather": {
    "cityName": "London",
    "description": "cloudy",
    "tempMin": 12.95,
    "tempMax": 17.39
  }
}
OR
{
  "result": false,
  "error": "City not found"
} */

//router.delete('weather/:cityName', (req, res){

//})
// DELETE /weather/:cityName - Sample result: 
/*{
  "result": true,
  "weather": [
    {
      "cityName": "Rio de Janeiro",
      "description": "sunny",
      "tempMin": 23.98,
      "tempMax": 28.63
    },
    {
      "cityName": "Stockholm",
      "description": "sunny",
      "tempMin": 6.03,
      "tempMax": 10.59
    }
  ]
}
OR
{
  "result": false,
  "error": "City not found"
} */

module.exports = router;
