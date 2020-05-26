const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const passport = require("../../config/passport-config");
const isAuthenticated = require("../../config/isAuthenticated");

// Matches with "/api/user/"
router.post('/login',
  passport.authenticate('local-login'),
  function (req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    // Then you can send your json as response.
    console.log('User Logged In !!!' + req.user);

    res.json({ message: "Success", username: req.user.username });
  });
router.post('/register',
  passport.authenticate('local-signup'),
  function (req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    // Then you can send your json as response.
    console.log('User !!!' + req.user);

    res.json({ message: "Success", username: req.user.username });
  });

router.get('/logout', function (req, res) {
  req.logout();
  res.json({ message: "user logged out" });
}),

router.post("/:id/savedcollections/:collectionId", isAuthenticated, usersController.saveCollection);
router.route("/:id/savedcollections").get(usersController.getCollections)

router.get('/userJson', function (req, res) {
  console.log("lol", req.user);
  res.json(req.user);
});

// Matches with "/api/user/:id"
router
  .route("/:id")
  .get(usersController.findById)
  .delete(usersController.remove);

module.exports = router;