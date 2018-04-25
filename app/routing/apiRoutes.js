var path = require("path");

var restaurantData = require("../data/restaurant.js");

console.log(restaurantData);

module.exports = function (app) {
    console.log("Export worked");


    //Collect data from server
    app.get("/api/tables", function (req, res) {
        // res.json("Test Data");
        res.json(restaurantData.Customers);
    });


    app.get("/api/waitlist", function (req, res) {
        res.json(restaurantData.waitingList);
    });

    app.post("/api/tables", function(req, res) {
        res.json(req.body);

    })


};




