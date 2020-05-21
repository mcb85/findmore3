import axios from "axios";

export default {
 
  // getBooksCollectionsByTitle: function (title) {
  //   return axios.get("/api/books/" + title);
  // },
  // getBooksCollectionByUserId: function (id) {
  //   return axios.get("/api/books/user/" + id);
  // },
  // deleteBooksCollection: function (id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // createBooksCollection: function (data) {
  //   return axios.post("/api/books/", data);
  // },
  // getBooksCommentsByCollectionId: function (id) {
  //   return axios.get("/api/booksComments/" + id);
  // },
  // createBooksComments: function (data) {
  //   return axios.post("/api/booksComments/", data);
  // },
  // getShowsCollectionsByTitle: function (title) {
  //   return axios.get("/api/shows/" + title);
  // },
  // getShowsCollectionByUserId: function (id) {
  //   return axios.get("/api/shows/user/" + id);
  // },
  // deleteShowsCollection: function (id) {
  //   return axios.delete("/api/shows/" + id);
  // },
  // createShowsCollection: function (data) {
  //   return axios.post("/api/shows/", data);
  // },
  // getShowsCommentsByCollectionId: function (id) {
  //   return axios.get("/api/booksComments/" + id);
  // },
  // createShowsComments: function (data) {
  //   return axios.post("/api/booksComments/", data);
  // },
  getMoviesCollectionsByTitle: async function (title) {

    const result = await axios.get("/api/movies/" + title);
    console.log("getMoviesCollectionsByTitle result: " + JSON.stringify(result.data));
    return result;
  },
  getMoviesCollectionByUserId: function (id) {
    return axios.get("/api/movies/user/" + id);
  },
  deleteMoviesCollection: function (id) {
    return axios.delete("/api/movies/" + id);
  },
  createCollection: function (data) {
    console.log(data);
    return axios.post("/api/movies", data);
  },
  getMoviesCommentsByCollectionId: function (id) {
    return axios.get("/api/movieComments/" + id);
  },
  createMoviesComments: function (data) {
    return axios.post("/api/movieComments/", data);
  },
  LoginUser: function (data) {
    return axios.post("api/user/login", data);
  },
  RegisterUser: function (data) {
    return axios.post("api/user/register", data);
  },
  getUserById: function (id) {
    return axios.get("api/user/" + id);
  },
  deleteUser: function (id) {
    return axios.delete("/api/user/" + id);
  },
  updateUpVotes: function (id) {
    return axios.put("api/upvote/votes/" + id);
  },
  
  updateDownVotes: function (id) {
  return axios.put("api/downvote/votes/" + id);
}
  
  
 
};
 

