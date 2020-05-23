const db = require("../models");
const { Op } = require("sequelize");
const passport = require("../config/passport-config");

module.exports = {
  findById: function (req, res) {
    db.user
      .findOne({
        where: {
          id: req.params.id,
        },
      })
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
  login: function (req, res) {
    passport.authenticate("local-login", {
        successRedirect: "/",
        failureRedirect: "/login"
      })
      // db.user.findOne({ where: { username: username } }).then(function (user) {
      //   if (!user) {
      //     return done(null, false, { message: "username incorrect" });
      //   }
      //   if (!bcrypt.compareSync(password, user.password)) {
      //     return done(null, false, { message: "Incorrect password" });
      //   }
      //   return done(null, user);
      // })
      
  },

  register: function (req, res) {
     db.user
       .create(req.body)
       .then(data => res.json(data))
       .catch((err) => {
         console.log("register user: error received " + JSON.stringify(err.message))
         console.log("register user" + data);
         console.log(err);
         res.status(422).json(err);
       })
      passport.authenticate("local-signup", {
        successRedirect: "/",
        failureRedirect: "/register"
      })
  },
  remove: function (req, res) {
    db.user
      .destroy({ where: { id: req.params.id } })
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
};
