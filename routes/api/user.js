const db = require('../../models')
const express = require("express");
const app = express()
const passport = require('../../config/passport')


app.post("/login", passport.authenticate("local"), function(req, res){
    res.json(res.user)
});

// Route for getting some data about our user to be used client side
app.get("/", function (req, res) {
    db.Users.findAll()
        .then(dbUser => {
            if (dbUser.length > 1) {
                res.json("Empty Object")
            }
            console.log(dbUser)
            res.json(dbUser)
        })
        .catch(err => console.log(err))
});

app.get("/:id", function (req, res) {
    console.log(req.params.id)
    db.Users.findAll({ id: req.params.id })
        .then(dbUser => {
            if (dbUser.length > 1) {
                res.json("Empty Object")
            }
            console.log(dbUser)
            res.json(dbUser)
        })
        .catch(err => console.log(err))
});

app.post("/", function (req, res) {
    db.Users.findOne({
        where: { email: req.body.email }
    }).then(function (loggedIn) {
        if (loggedIn) {
            return res.send("Email already exists!")
        } 
        else {
            return db.Users.create({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            })
        }
    }).then(function (user) {
        res.json(user)
    }).catch(err => console.log(err))
});

// Route for updating user data to be used for client side
app.put("/:id", function (req, res) {
    db.Users.update(
        {
            email: req.user.email,
            password: req.user.password
        },
        { where: { id: req.params.id } })
        .then(function (result) {
            res.json(result);
        });
});


// Route for logging out user
app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
});

// Route for post user's favoriotes
app.post("/:userId/favorites", function (req, res) {
    console.log("req", req.body);
    db.Favorites.create({
        name: req.body.name,
        address: req.body.address,
        phone: req.body.phone,
        hours: req.body.hours,
        UserId: req.params.userId
        // type: req.body.type,
        // foodType: req.body.foodType
    })
        .then(results => {
            res.json(results);
        });
});


app.get("/:userId/favorites", function (req, res) {
    console.log(req.params.userId)
    db.Favorites.findAll({
        where: {
            UserId: req.params.userId,
        }
    })
        .then(dbRestaurants => {
            console.log(dbRestaurants)
            res.json(dbRestaurants)
        })
        .catch(err => console.log(err))
});


app.delete("/:userId/favorites/:fid", function (req, res) {
    console.log(req.params.fid)
    db.Favorites.destroy({
        where: { id: req.params.fid }
    }).then(function (results) {
        res.json(results);
    })
});





module.exports = app