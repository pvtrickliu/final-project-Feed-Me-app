const db = require("../../models")
const express = require("express");
const app = express()
// const postsController = require("../../controllers/postsController");

  // .post(postsController.create);
app.post('/', (req,res)=>{
    console.log(req)
        db.Images.create({
          image_link: req.body.image_link
        })
          // .sort({ date: -1 })
          .then(dbModel => res.json(dbModel))
})

app.get('/:id', (req,res)=>{
  console.log(req.params.id)
})

// Matches with "/api/posts/:id"
// router
//   .route("/:id")
//   .get(postsController.findById)
//   .put(postsController.update)
//   .delete(postsController.remove);



// app.post(/api/images) // add images to database

// app.get(/api/images?start=10&count=10) // get food type associate with img


// findAll: function(req, res) {
  //   db.Post.find(req.query)
  //     .sort({ date: -1 })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // findById: function(req, res) {
  //   db.Post.findById(req.params.id)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // create: function(req, res) {
  //   db.Post.create(req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // update: function(req, res) {
  //   db.Post.findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // remove: function(req, res) {
  //   db.Post.findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }




module.exports = app;
