var express = require("express");
var router = express.Router();
const fetch = require("node-fetch");
const City = require('../models/cities')

const OWM_API_KEY = 'c88d94bbb2c9195835e71452811315ca'


router.post("/", (req, res) => {
    const cityName = req.body.cityName.toLowerCase();
    
    // Vérifier si la ville est déjà dans la base de données
    City.findOne({ cityName }, (err, city) => {
        if (err) {
            return res.json({ result: false, error: err.message });
        }
        
        if (city) {
            return res.json({ result: false, error: "City already saved" });
        }
        
        // Si la ville est absente de la DB on va récupérer les données depuis l'api
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${OWM_API_KEY}&units=metric`)
            .then(response => response.json())
            .then(apiData => {
                const newCity = new City({
                    cityName: apiData.name.toLowerCase(),
                    main: apiData.weather[0].main,
                    description: apiData.weather[0].description,
                    tempMin: apiData.main.temp_min,
                    tempMax: apiData.main.temp_max,
                });

                newCity.save((err, city) => {
                    if (err) {
                        return res.json({ result: false, error: err.message });
                    }
                    
                    res.json({ result: true, weather: city });
                });
            })
            .catch(err => {
                res.json({ result: false, error: err.message });
            });
    });
});
  
  router.get("/", (req, res) => {
    City.find().then(data => {
     res.json({ weather : data });
    })
    
  });
  

  router.get('/:cityName', (req, res) => {
    City.findOne({ cityName: { $regex: new RegExp(req.params.cityName, 'i') } }).then(data => {
            if (data) {
                    res.json({ result: true, weather: data });
            } else {
                    res.json({ result: false, error: 'City not found' });
            }
    });
});
  
router.delete("/:cityName", (req, res) => {
    const cityName = req.params.cityName;
    City.findOneAndDelete({ cityName }).then(deletedCity => {
        if (deletedCity) {
            res.json({ result: true, deletedCity });
        } else {
            res.json({ result: false, error: "City not found" });
        }
    }).catch(err => {
        res.json({ error: err.message });
    });
});


  
module.exports = router;