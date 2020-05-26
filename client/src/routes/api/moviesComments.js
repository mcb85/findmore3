const router = require("express").Router();
const moviesCommentsController = require("../../controllers/moviesCommentsController");

// Matches with "/api/moviesComments/"
router.route("/").post(moviesCommentsController.createComment);

// Matches with "/api/moviesComments/:id"
router
  .route("/movieComments/:id")
  .get(moviesCommentsController.findByCollection)
  .delete(moviesCommentsController.remove);

module.exports = router;