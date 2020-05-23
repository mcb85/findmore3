const router = require("express").Router();
const moviesCollectionsController = require("../../controllers/moviesCollectionsController");

// Matches with "/api/movies/"
console.log("create collection post route")
router.route("/").post(moviesCollectionsController.create);

// Matches with "/api/movies/:title"
console.log("findbyTitle route");
router.route("/:title").get(moviesCollectionsController.findByTitle);

// Matches with "/api/movies/:id"
router
  .route("/:id")
  .get(moviesCollectionsController.findById)
  .delete(moviesCollectionsController.remove);

// Matches with "/api/movies/user/:userId"
router.route("/user/:userId").get(moviesCollectionsController.findByUserId);

router
  .route("/upvote/:votes/:id")
  .put(moviesCollectionsController.updateUpVotes);

router
  .route("/downvote/:votes/:id")
  .put(moviesCollectionsController.updateDownVotes);

module.exports = router;