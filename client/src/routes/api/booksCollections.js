const router = require("express").Router();
const booksCollectionsController = require("../../controllers/booksCollectionsController");

// Matches with "/api/books/"
router.route("/").post(booksCollectionsController.create);

// Matches with "/api/books/:title"
router.route("/:title").get(booksCollectionsController.findByTitle);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksCollectionsController.findById)
  //TODO: Fix update, function does not exist in booksCollectionController file
  //.put(booksCollectionsController.update)    
  .delete(booksCollectionsController.remove);

// Matches with "/api/books/user/:userId"
router.route("/user/:userId").get(booksCollectionsController.findByUserId);

router
  .route("/upvote/:votes/:id")
  .put(booksCollectionsController.updateUpVotes);

router
  .route("/downvote/:votes/:id")
  .put(booksCollectionsController.updateDownVotes);

module.exports = router;
