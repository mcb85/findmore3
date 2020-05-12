import axios from "axios";

export default {
  getMovieCollections: function (data) {
    console.log(data);
    return axios.get("/api/movieCollections");
  },
  
  getBookCollections: function (data) {
    console.log(data);
    return axios.get("/api/movieCollections");
  },

  getTvShowCollections: function (data) {
    console.log(data);
    return axios.get("/api/tvShowCollections");

  }
  // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // // Saves a book to the database
  // saveBook: function(bookData) {
  //   console.log("saved");
  //   return axios.post("/api/books", bookData);
  // }
};
