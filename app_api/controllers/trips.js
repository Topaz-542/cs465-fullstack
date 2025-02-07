const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // register model
const Model = mongoose.model('trips');

// GET: /trips - lists all the trips
// regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsList = async(req, res) => {
    const q =  await Model
        .find({}) // no filter, return all records
        .exec();

        // uncomment the following line to show results of query
        // on the console
         console.log("Hello World");

    if(!q)
    { // Database returned no data
        return res
            .status(404)
            .json(err);
    } else {
        return res
            .status(200)
            .json(q);
    }

};

module.exports = {
    tripsList
};