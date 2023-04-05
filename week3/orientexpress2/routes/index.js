require('../models/connection')
var express = require('express');
var router = express.Router();
const Trip = require('../models/trips')

//let trips = [{ departure: 'Paris', arrival: 'Lyon' }, { departure: 'Lyon', arrival: 'Marseille' }];

router.post('/trips', (req, res) => {
  const departure = req.body.departure
  const arrival = req.body.arrival
  const newTrip = new Trip ({
    departure,
    arrival,
  })
  newTrip.save()
  .then((data) => res.json({result : true, allTrips : [data]}))
});

router.get('/trips', (req, res) => {
  Trip.find().then((data) => res.json({result: true, allTrips: data}))
});

//router.get('/trips', async (req, res, next) => {
//  try {
//    const trips = await Trip.find();
//    res.json({ allTrips: trips });
//  } catch (err) {
//    next(err);
//  }
//});

router.get('/lastTrip', (req, res) => {
Trip.find()
.then(data => {res.json({result: true, lastTrip: data[data.length-1]})})
});

router.delete('/trips', (req, res) => {
  Trip.deleteMany({})
  .then(data => res.json({result : true, allTrips: data}));
});

module.exports = router;
