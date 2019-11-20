const imageRoutes = require("./api/image");
// const restaurantRoutes = require("./api/restaurant")

// API Routes

// If no API routes are hit, send the React app

module.exports = function(app){
  app.use("/api/images", imageRoutes);
  // app/use("/", restaurantRoutes)
};
