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

// app.post(api/users/:id/choices) // create new favorite list

// app.put(api/users/:id/choices) // update favorite list

// app.delete(api/users/:id/choices/:id) // delete checked in restaurants

module.exports = app;