import axios from "axios";

export default {
  setImage: function (number) {
    let start = Math.floor(Math.random() * 89)
    let num
    if (num === start || num < start + 10) {
      start = Math.floor(Math.random() * 89);
      console.log(start)
      return start
    }
    return axios.get(`/api/images?start=${number || start}&count=10`)
      .then(res => {
        return res
      }).catch(err => console.log(err))
  }
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