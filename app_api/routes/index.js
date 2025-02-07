const express = require('express'); // express app
const router = express.Router();

// this is where we import the controllers we made
const tripsController = require('../controllers/trips');

// define route for our trips endpoint
router
    .route('trips')
    .get(tripsController.tripsList); // GET method routes tripslist


// GET method routes tripsFindByCode
router
    .route('/trips/:tripsCode')
    .get(tripsController.tripsFindByCode);

module.exports = router;