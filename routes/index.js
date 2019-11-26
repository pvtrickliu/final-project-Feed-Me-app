const imageRoutes = require("./api/image");
const userRoutes = require('./api/user')
const restaurantRoutes = require("./api/restaurant")
const favRoutes = require("./api/favorites")

// API Routes

// If no API routes are hit, send the React app

module.exports = function(app){
  app.use("/api/images", imageRoutes);
  app.use("/api/users", userRoutes);
  app.use('/api/restaurants', restaurantRoutes);
  app.use('/api/favorites', favRoutes);
};
