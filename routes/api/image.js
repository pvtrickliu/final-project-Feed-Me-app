const db = require("../../models")
const express = require("express");
const app = express()
var axios = require("axios");
const fs = require('fs');
const path = require('path');
var appRoot = require('app-root-path');
const shortid = require("shortid")

app.post('/', (req, res) => {
  console.log(req)

  const url = "https://getinspiredeveryday.com/food/wp-content/uploads/sites/5/2018/01/My-Favorite-Yellow-Thai-Curry-Get-Inspired-Everyday-7.jpg";

  const download_image = (url) => {
    let filename = shortid.generate();
    let dotat = url.lastIndexOf('.')
    let ext = url.substr(dotat - 1);
    let filepath = appRoot + '/client/public/images/' + filename + ext;
    let imagePath = 'images/' + filename + ext;
    axios({
      url,
      responseType: 'stream',
    }).then(
      response => {
        new Promise((resolve, reject) => {
          response.data
            .pipe(fs.createWriteStream(filepath))
            .on('finish', () => {
              console.log('finish');
              db.Images.create({
                image_link: imagePath,
                foodType: req.body.foodType
              })
                .then(dbModel => res.json(dbModel))
              resolve()
            }
            )
            .on('error', e => reject(e));
        })
      }
    );
  }
  download_image(req.body.image_link);



})

// app.get('/', (req,res)=>{
//   console.log("query", req.query);

// })


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
