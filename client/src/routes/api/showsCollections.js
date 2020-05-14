const router = require("express").Router();
const showsCollectionsController = require("../../controllers/showsCollectionsController");

// Matches with "/api/shows"
router.route("/").post(showsCollectionsController.create);

// Matches with "/api/shows/:title"
router.route("/:title").get(showsCollectionsController.findByTitle);

// Matches with "/api/shows/:id"
router
  .route("/:id")
  .get(showsCollectionsController.findById)
  .delete(showsCollectionsController.remove);

// Matches with "/api/shows/user/:userId"
router.route("/user/:userId").get(showsCollectionsController.findByUserId);

router
  .route("/upvote/:votes/:id")
  .put(showsCollectionsController.updateUpVotes);

router
  .route("/downvote/:votes/:id")
  .put(showsCollectionsController.updateDownVotes);

module.exports = router;