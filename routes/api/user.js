const db = require("../../models")
const express = require("express");
const app = express()




// Route for getting some data about our user to be used client side
app.get("/:id", function (req, res) {
    console.log(req.params.id)
    db.Users.findAll ({id:req.params.id})
    .then (dbUser=>{ 
        if (dbUser.length > 1) {
            res.json("Empty Object")
        }
        console.log(dbUser)
        res.json(dbUser)
    })
    .catch(err => console.log(err))
});

app.post("/signup", function(req, res){
    db.Users.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    .then(function(user){
        res.json(user)
    }).catch(err=>console.log(err))
})

// Route for updating user data to be used for client side
app.put("/:id", function (req, res) {
    db.Users.update({
        email: req.user.email,
        password: req.user.password
    })
    .then(function (result) {
        res.json(result);
    });
});


// Route for logging out user
app.get("/auth/logout", function (req, res) {
    req.logout();
    res.redirect("/");
});

module.exports = app