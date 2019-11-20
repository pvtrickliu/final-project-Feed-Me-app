const router = require("express").Router();
// const postRoutes = require("./posts");

// Post routes
// router.use("/posts", postRoutes);




// Route for getting some data about our user to be used client side
app.get("/api/users/:id", function (req, res) {
    if (!req.user) {
        // The user is not logged in, send back an empty object
        res.json({});
    } else {
        // Otherwise send back the user's email and id
        res.json({
            email: req.user.email,
            username: req.user.username,
            id: req.user.id
        });
    }
});

// Route for updating user data to be used for client side
app.put("/api/users/:id", function (req, res) {
    Users.update({
        email: req.user.email,
        password: req.user.password
    },    
    ).then(function (result) {
        res.json(result);
    });
});



// Route for logging out user
app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
});