const router = require("express").Router();
const showsCommentsController = require("../../controllers/showsCommentsController");

// Matches with "/api/showsComments/"
router.route("/").post(showsCommentsController.create);

// Matches with "/api/showsComments/:id"
router
  .route("/:id")
  .get(showsCommentsController.findByCollection)
  .delete(showsCommentsController.remove);

module.exports = router;