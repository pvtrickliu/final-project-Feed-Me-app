const db = require('../../models')
const express = require("express");
const app = express()

// create new favorite list
// app.post("/:userId/favorites", function (req, res) {
//     console.log("req", req.body);
//     db.Favorites.create({
//         name: req.body.name,
//         address: req.body.address,
//         phone: req.body.phone,
//         hours: req.body.hours,
//         // type: req.body.type,
//         // foodType: req.body.foodType
//     })
//         .then(results => {
//             res.json(results);
//         });
// });

app.get("/:userId/favorites", function (req, res) {
    console.log(req.params.userId)
    db.Restaurants.findAll({
        where: {
            UserId: req.params.userId,
        }
    })
        .then(dbRestaurants => {
            if (dbRestaurants.length > 1) {
                res.json("Empty Object")
            }
            console.log(dbRestaurants)
            res.json(dbRestaurants)
        })
        .catch(err => console.log(err))
});


app.delete("/:userId/favorites/:fid", function (req, res) {
    db.Restaurants.destroy({
        where: { id: req.params.id }
    }).then(function (results) {
        res.json(results);
    })
});
module.exports = app;

// update favorite list
// app.put(":id/choices", function (req, res) {
//     db.Restaurants.update(req.body,
//         {
//             where: {
//                 id: req.body.id
//             }
//         }).then(function (results) {
//             res.json(results);
//         })
// })

// delete checked in restaurants
