var db = require("../../models");
var axios = require("axios");
var express = require('express');
var app = express();
const Sequelize = require("Sequelize");
const Op = Sequelize.Op;

// show the list of restaurants based on geolocation and cuisine
app.get("/", function (req, res) {
    // console.log(req.query)
    let url = (req.query.entity_id === 'undefined') ? `https://developers.zomato.com/api/v2.1/search?lat=${req.query.lat}&lon=${req.query.lon}&radius=1&sort=real_distance&cuisines=${req.query.cuisineId}`: `https://developers.zomato.com/api/v2.1/search?entity_id=${req.query.entity_id}&cuisines=${req.query.cuisineId}`;

    // console.log(url);

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
// let foodType;
// if (Object.keys(req.query).length === 0) {
//     condition = {
//         name: req.query.name,
//         address: req.query.address,
//         phone: req.query.phone,
//         hours: req.query.hours,
//         foodType: req.query.foodType
//     }
// } else if (req.query.foodType) {
//     condition = {
//         where: {
//             foodType: req.query.foodType
//         }
//     }

//     Restaurants.findAll({
//         condition,
//         include: [User]
//     }).then(etc => {
//         res.json(etc)
//     });
// }


// update restaurant by date
// app.put("api/restaurants/date")({ body, params }, res => {
//     console.log(req.body)
//     db.Restaurants.update(req.body,
//         {
//             where: {
//                 id: req.body.id
//             }
//         }).then(function (results) {
//             res.json(results);
//         })
// })


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