import axios from "axios";

export default {
  getMoviesCollectionsByTitle: async function (title) {
    const result = await axios.get("/api/movies/" + title);
    console.log("getMoviesCollectionsByTitle result: " + JSON.stringify(result.data));
    return result;
  },
  saveMoviesCollection: function (userId, collectionIds) {
    return axios.post("/api/user/" + userId + "/savedcollections/" + collectionIds);
  },

  getSavedCollectionsByUserId: function (userId) {
    return axios.get("/api/user/" + userId + "/savedcollections");
  },
  
  getMoviesCollectionsById: function (id) {
    return axios.get("api/movies/" + id);
  },

  getMoviesCollectionByUserId: function (userId) {
    return axios.get("/api/movies/user/" + userId);
  },
  deleteMoviesCollection: function (id) {
    return axios.delete("/api/movies/" + id);
  },
  createCollection: function (data) {
    console.log("create collection data", data);
    return axios.post("/api/movies", data);
  },
  getMoviesCommentsByCollectionId: function (collectionId) {
    return axios.get("/api/movieComments/" + collectionId);
  },
  createMoviesComments: function (data,collectionId) {
    return axios.post("/api/movieComments/" + collectionId, data);
  },
  LoginUser: function (data) {
    console.log("logging in");
    console.log(data);
    return axios.post("api/user/login", data);
  },
  RegisterUser: function (data) {
    console.log("registering user");
    console.log(data);
    return axios.post("api/user/register", data);
  },
  getUserById: function (id) {
    return axios.get("api/user/" + id);
  },
  deleteUser: function (id) {
    return axios.delete("/api/user/" + id);
  },
  updateUpVotes: function (collectionId) {
    return axios.put("api/movies/" + collectionId + "/upvotes");
  },

  updateDownVotes: function (collectionId) {
    return axios.put("api/movies/" + collectionId +  "/downvotes");
  }

};











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
  
 

