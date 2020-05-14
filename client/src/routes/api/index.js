const router = require("express").Router();
const showRoutes = require("./showsCollections");
const movieRoutes = require("./moviesCollections");
const bookRoutes = require("./booksCollections");
const showsCommentsRoutes = require("./showsComments");
const moviesCommentsRoutes = require("./booksComments");
const booksCommentsRoutes = require("./moviesComments");
const userRoutes = require("./users");

// Book routes
router.use("/shows", showRoutes);
router.use("/movies", movieRoutes);
router.use("/books", bookRoutes);
router.use("/showsComments", showsCommentsRoutes);
router.use("/moviesComments", moviesCommentsRoutes);
router.use("/booksComments", booksCommentsRoutes);
router.use("/user", userRoutes);

module.exports = router;

