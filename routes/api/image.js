const db = require("../../models")
const express = require("express");
const app = express()
const axios = require("axios");
const fs = require('fs');
const appRoot = require('app-root-path');
const shortid = require("shortid")
const Sequelize = require("Sequelize")
const Op = Sequelize.Op;

// app.post(/api/images) // add images to database
app.post('/', (req, res) => {
  let dotat = req.body.image_link.lastIndexOf('.')
  let ext = req.body.image_link.substr(dotat - 1);
  let filename = shortid.generate() + ext;
  let filepath = appRoot + '/client/public/images/' + filename;
  let imagePath = 'images/' + filename;
  let url = req.body.image_link;

  axios({
    url,
    responseType: 'stream',
  }).then(
    response => {
      return new Promise((resolve, reject) => {
        response.data
          .pipe(fs.createWriteStream(filepath))
          .on('finish', () => {
            resolve()
          })
          .on('error', e => reject(e));
      })
    }
  ).then(() => {
    db.Images.create({
      image_link: imagePath,
      foodType: req.body.foodType,
      cuisineId: req.body.cuisineId
    });
  }).then(dbModel => {
    res.json(dbModel)
  }).catch(err => {
    console.log(err.message)
  });
});


// app.get(/api/images?start=10&count=10) // get food type associate with img
app.get('/', (req, res) => {
  console.log("query", req.query);
  let condition;

  if (Object.keys(req.query).length === 0) {
    res.send(res.status(400).end())
  } else if (req.query.start && req.query.count) {
    let start = parseInt(req.query.start) + 1;
    let count = parseInt(req.query.start) + parseInt(req.query.count);
    condition = {
      where: {
        id: {
          [Op.between]: [start, count]
        }
      }
    }
  };

  console.log(condition)
  db.Images.findAll(
    condition
  ).then(etc => {
    res.json(etc)
  }).catch(err => {
    console.log(err.message)
  });
});

module.exports = app;