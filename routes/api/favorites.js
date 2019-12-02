const db = require('../../models')
const express = require("express");
const app = express()

app.get("/:id", function (req, res) {
    console.log(req.params.id)
    db.Restaurants.findAll({
        where: {
            id: req.params.id,
        }, include: [db.Users]
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
// create new favorite list
app.post(":id/choices", function (req, res) {
    console.log("req", req.body);
    db.Restaurants.create({
        name: req.body.name,
        address: req.body.address,
        phone: req.body.phone,
        hours: req.body.hours,
        type: req.body.type,
        foodType: req.body.foodType,
    })
        .then(results => {
            res.json(results);
        });
});

// update favorite list
app.put(":id/choices", function (req, res) {
    db.Restaurants.update(req.body,
        {
            where: {
                id: req.body.id
            }
        }).then(function (results) {
            res.json(results);
        })
})

// delete checked in restaurants
app.delete(":id/choices/:id", function (req, res) {
    db.Restaurants.destroy({
        where: { id: req.params.id }
    }).then(function (results) {
        res.json(results);
    })
});
module.exports = app;