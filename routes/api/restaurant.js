var db = require("../../models");
var axios = require("axios");
var express = require('express');
var app = express();
const appRoot = require('app-root-path');
const Sequelize = require("Sequelize")
const Op = Sequelize.Op;

var GEO_API = "AIzaSyCYE9Fqg83eLXcEZJF7KmC40Sl6DIVvMKA";
    // show the list of restaurants based on geolocation and cuisine
    app.get("/", function (req, res) {
        console.log('getting location...')
        axios.post(`https://www.googleapis.com/geolocation/v1/geolocate?key=${GEO_API}`).then(geo=>{
            console.log("your coords: ", geo.data.location)
            axios({
            url: `https://developers.zomato.com/api/v2.1/search?lat=${geo.data.location.lat}&lon=${geo.data.location.lng}&radius=1&sort=real_distance&cuisines=${cuisines.cuisine_id}`,
            method: "get",
            headers: {
              "user-key": "8646bb21096cb3daddb7328eb3a342e0",
              "Accept": "application/json"
            }
          }).then(function (response) {
            res.json(response.data.restaurants);
          }).catch(err=>console.log(err))
        }).catch(err=> console.log(err))
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
    app.get("/api/restaurants/:id", function (req, res) {
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

    // <!DOCTYPE html>
    // <html lang="en">
    // ​
    // <head>
    //   <meta charset="utf-8">
    //   <title>Single AJAX</title>
    // </head>
    // ​
    // <body>
    //   <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    //   <script type="text/javascript">
    // ​
    //     var GEO_API = "AIzaSyCYE9Fqg83eLXcEZJF7KmC40Sl6DIVvMKA"
    // ​
    //     var geoURL = `https://www.googleapis.com/geolocation/v1/geolocate?key=${GEO_API}`;
    //     // var cityURL = `https://developers.zomato.com/api/v2.1/cities?q=${city}`
    //     // var cuisineURL = `https://developers.zomato.com/api/v2.1/cuisines?lat=${lat}&lon=${lon}`
    // ​
    //     $.ajax({
    //       url: geoURL,
    //       method: "POST"
    //     }).then(function (res) {
    //       console.log(res)
    //       var lat = res.location.lat;
    //       console.log(lat)
    //       var lon = res.location.lng;
    //       console.log(lon)
    // ​
    // ​
    //       var cuisine_id = 25;
    // ​
    //       $.ajax({
    //         url: `https://developers.zomato.com/api/v2.1/search?lat=${lat}&lon=${lon}&cuisines=25`,
    //         method: "GET",
    //         headers: {
    //           "user-key": "8646bb21096cb3daddb7328eb3a342e0",
    //           "Accept": "application/json"
    //         }
    //       }).then(function (response) {
    //         console.log(response);
    //       })
    // ​
    //     })
    // ​
    // ​
    //     // third-party api:
    //     // geo location: https://www.googleapis.com/geolocation/v1/geolocate?key=${GEO_API}
    //     // restaurant suggestion: https://developers.zomato.com/api/v2.1/search?lat=${lat}&lon=${lon}&cuisines=25
    //     // map: https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap
    // ​
    //     // server api:
    //     // sequelize
    // ​

//
// ​
// ​
//   thai:
//       https://getinspiredeveryday.com/food/wp-content/uploads/sites/5/2018/01/My-Favorite-Yellow-Thai-Curry-Get-Inspired-Everyday-7.jpg
//       https://www.gimmesomeoven.com/wp-content/uploads/2010/05/pineapple-fried-rice-4.jpg
//       https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/best_and_worst_thai_dishes_slideshow/1800x1200_slideshow_best_and_worst_thai_dishes_for_your_health.jpg
//       https://res.cloudinary.com/spothopper/image/fetch/f_auto,q_80,c_fit,h_864/http://static.spotapps.co/spots/95/7e0a80013511e883b92d75d4f866f6/:original
//       https://www.gimmesomeoven.com/wp-content/uploads/2019/01/Pad-Thai-Recipe-1.jpg
// ​
//       Greek:
//       https://bucketlistjourney.net/wp-content/uploads/2015/12/8686135099_c4f29e2579_k.jpg
//       https://bucketlistjourney.net/wp-content/uploads/2015/12/16782062070_5465cd6895_k.jpg
//       https://bucketlistjourney.net/wp-content/uploads/2015/12/3580391167_47695aa884_o.jpg
//       https://bucketlistjourney.net/wp-content/uploads/2015/12/IMG_1057-640x427.jpg
//       https://bucketlistjourney.net/wp-content/uploads/2016/06/7582224984_59e0ec1396_k.jpg
// ​
//       Chinese:
//       https://n.sinaimg.cn/sinacn10/209/w579h430/20180418/36da-fzihnep2978510.jpg
//       https://hips.hearstapps.com/del.h-cdn.co/assets/17/15/1492181807-delish-sticky-orange-chicken-1.jpg
//       https://hoodline.imgix.net/uploads/story/image/521633/EDITOR_FIXED.jpg?auto=format
//       https://tul.imgix.net/content/article/yangs-dumplings-sydney-best-chinese-food.jpg?auto=format,compress&w=520&h=390&fit=crop
//       http://img1.lotour.net/Inspiration/2019/0513/2019051316460880341767_640.jpg
// ​
//       Japanese:
//       https://wtop.com/wp-content/uploads/2015/10/ThinkstockPhotos-174709526-1880x1254.jpg
//       http://media2.s-nbcnews.com/i/streams/2014/October/141007/2D274906951479-today-ramen-141007-01.jpg
//       https://www.justonecookbook.com/wp-content/uploads/2019/03/Pressure-Cooker-Japanese-Curry-II.jpg
//       https://nihombashi-tokyo.com/wp-content/uploads/2014/11/ENT_2693arsh_1a.jpg
//       https://blogmedia.evbstatic.com/wp-content/uploads/rally-legacy/2017/05/20130809/2214337288_e98f58f1c0_b-1500x750.jpg
// ​
//   </script>
// ​
// </body>
// ​
// </html>
// ​
// ​
// ​
// ​
// <header>
//   <map>
//   </map>
// ​
//   <list>
//     <h1>restaurant name</h1>
//     <p>address</p>
//     <p>phone number</p>
//     <p>hours of operation</p>
//     <button>Save</button>
//   </list>
// </header>
// ​
// ​
// <header>
// <foodtype>
//     <list>
//     <h1>restaurant name</h1>
//     <p>address</p>
//     <p>phone number</p>
//     <p>hours of operation</p>
//     <button>Save</button>
//   </list>

