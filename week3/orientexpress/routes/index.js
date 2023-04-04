var express = require('express');
var router = express.Router();

let trips = [{ departure: 'Paris', arrival: 'Lyon' }, { departure: 'Lyon', arrival: 'Marseille' }];

router.post('/trips', (req, res)=> {
    trips.push({departure: req.body.departure, arrival: req.body.arrival})
    res.json({allTrips: trips}) 
} )




// POST /trips - Sample result: 
// "allTrips": [
//   {
//     "departure": "Paris",
//     "arrival": "Lyon"
//   },
//   {
//     "departure": "Lyon",
//     "arrival": "Marseille"
//   },
//   {
//     "departure": "Grenoble",
//     "arrival": "Strasbourg"
//   }
// ]
router.get('/trips', (req, res)=>{
    res.json({allTrips: trips})
})


// GET /trips - Sample result:
// "allTrips": [
//   {
//     "departure": "Paris",
//     "arrival": "Lyon"
//   },
//   {
//     "departure": "Lyon",
//     "arrival": "Marseille"
//   },
//   {
//     "departure": "Grenoble",
//     "arrival": "Strasbourg"
//   }
// ]


//router.get('/trips', (req, res)=>{
//    res.json({trips.length-1})
//})
router.get('/lastTrip', function(req, res) {
    var lastTrip = trips[trips.length-1];
    var result = {
      "lastTrip": {
        "departure": lastTrip.departure,
        "arrival": lastTrip.arrival
      }
    };
    res.json(result);
  });



// GET /lastTrip - Sample result:
// "lastTrip": {
//   "departure": "Grenoble",
//   "arrival": "Strasbourg"
// }

router.delete('/trips', function(req, res) {
    trips = [];
    res.json({ message: 'Tous les voyages ont été supprimés.' });
  });
// DELETE /trips - Sample result:
// "allTrips": []

module.exports = router;