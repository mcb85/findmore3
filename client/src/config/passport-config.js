const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("../models");
var bcrypt = require("bcryptjs");

// registration handler
passport.use(
  "local-signup",
  new LocalStrategy(
    {
      usernameField: "username",
      passReqToCallback: true
    },
    function (req, username, password, done) {
      console.log("sign-up")
      db.user
        .findOne({ where: { username: username } })
        .then(function(err, user) {
          if (err) {
            console.log("error");
            return done(err);
          }
          if (user) {
            console.log("already a user");
            return done(null, false, {
              message: "username is already in use."
            });
          }
          db.user
            .create({
              username: username,
              password: password
            })
            .then(function(dbUser) {
              return done(null, dbUser);
            });
        });
    }
  )
);

// login handler
passport.use(
  "local-login",
  new LocalStrategy(
    {
      usernameField: "username",
      passReqToCallback: true
    },
    function(req,username, password, done) {
      db.user.findOne({ where: { username: username } }).then(function(user) {
        if (!user) {
          return done(null, false, { message: "username incorrect" });
        }

      if (!bcrypt.compareSync(password, user.password)) {
          return done(null, false, { message: "Incorrect password" });
        }
        return done(null, user);
      });
    }
  )
);

passport.serializeUser((user, done) => {
  console.log("serializing user:", user.id);
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

module.exports = passport;



