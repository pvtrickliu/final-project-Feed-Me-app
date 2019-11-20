import axios from "axios";

export default {
  app.post(api/login) // Login to account

  app.post(api/users) // Sign up account

  app.get(api/users/:id) // get user info

  app.put(api/users/:id) // update user info

  app.get(/logout) // logout to home page

  app.get(/api/images?start=10&count=10) // get food type associate with img

  app.get(api/restaurants) // show the list of restaurants based on geolocation and foodtype

  app.get(api/restaurants/:id) // get detalied info and map of the restaurant

  app.post(api/users/:id/choices) // create new favorite list

  app.put(api/users/:id/choices) // update favorite list

  app.delete(api/users/:id/choices/:id) // delete checked in restaurants
};




// // Gets all posts
// getPosts: function() {
//   return axios.get("/api/posts");
// },
// // Gets the post with the given id
// getPost: function(id) {
//   return axios.get("/api/posts/" + id);
// },
// // Deletes the post with the given id
// deletePost: function(id) {
//   return axios.delete("/api/posts/" + id);
// },
// // Saves a post to the database
// savePost: function(postData) {
//   return axios.post("/api/posts", postData);
// }