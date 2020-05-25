const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/user/"
router.route("/login").post(usersController.login);
router.route("/register").post(usersController.register);
router.route("/:id/savedcollections/:collectionId").post(usersController.saveCollection)
router.route("/:id/savedcollections").get(usersController.getCollections)

// Matches with "/api/user/:id"
router
  .route("/:id")
  .get(usersController.findById)
  .delete(usersController.remove);

module.exports = router;