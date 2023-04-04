var express = require('express');
var router = express.Router();

let trips = [{ departure: 'Paris', arrival: 'Lyon' }, { departure: 'Lyon', arrival: 'Marseille' }];

router.post('/trips', (req, res)=> {
    trips.push({departure: req.body.departure, arrival: req.body.arrival})
    res.json({tripList: trips}) //correction : res.json({ allTrips: trips });
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
    res.json({tripsList: trips})
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
router.get('/trips/last', function(req, res) {
    let lastTrip = trips[trips.length-1];
    res.json({ tripList: [lastTrip] });
  });

// GET /lastTrip - Sample result:
// "lastTrip": {
//   "departure": "Grenoble",
//   "arrival": "Strasbourg"
// }
router.delete('/trips/:position', (req, res)=>{
    trips.splice(req.params, 1);
    res.json({tripList: trips})
})
// DELETE /trips - Sample result:
// "allTrips": []

module.exports = router;