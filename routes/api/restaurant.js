var db = require("../../models");
var axios = require("axios");
var express = require('express');
var app = express();
const Sequelize = require("Sequelize");
const Op = Sequelize.Op;

// show the list of restaurants based on geolocation and cuisine
app.get("/", function (req, res) {
    let url = `https://developers.zomato.com/api/v2.1/search?lat=${req.query.lat}&lon=${req.query.lon}&radius=1&sort=real_distance&cuisines=${req.query.cuisineId}`

    axios({
        url: url,
        method: "get",
        headers: {
            "user-key": "8646bb21096cb3daddb7328eb3a342e0",
            "Accept": "application/json"
        }
    }).then(function (response) {
        // console.log(response.data.restaurants)
        res.json(response.data.restaurants);
    }).catch(err => console.log(err.message))
})

// get detalied info and map of the restaurant
app.get("/:id", function (req, res) {
    db.Restaurants.findAll({
        include: [
            {
                model: db.Restaurants
            }
        ],
        where: {
            id: req.params.id
        }
    })
        .then(results => {
            res.json(results);
        })
})

module.exports = app