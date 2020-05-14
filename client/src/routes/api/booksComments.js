const router = require("express").Router();
const booksCommentsController = require("../../controllers/booksCommentsController");

// Matches with "/api/booksComments/"
router.route("/").post(booksCommentsController.create);

// Matches with "/api/bookComments/:id"
router
  .route("/:id")
  .get(booksCommentsController.findByCollection)
  .delete(booksCommentsController.remove);

module.exports = router;
