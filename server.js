require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const db = require("./client/src/models");
const routes = require("./client/src/routes");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}


app.use(routes);

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});


// require("dotenv").config();
// const express = require("express");
// const session = require("express-session");
// const passport = require("./client/src/config/passport-config");
// const app = express();
// const routes = require("./client/src/routes");
// const db = require("./client/src/models");
// const PORT = process.env.PORT || 3001;

// // Middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
// app.use(express.static("public"));
// app.use(
//     session({
//         secret: process.env.SECRET,
//         resave: false,
//         saveUninitialized: true
//     })
// );
// // Add routes, both API and view
// app.use(routes);
// app.use(passport.initialize());
// app.use(passport.session());

// app.set("view engine", "ejs");

// const syncOptions = { force: false };

// // If running a test, set syncOptions.force to true
// // clearing the `testdb`
// if (process.env.NODE_ENV === "test") {
//     syncOptions.force = true;
// }

// // Starting the server, syncing our models ----/
// db.sequelize
//     .query("SET FOREIGN_KEY_CHECKS = 0")
//     .then(function () {
//         return db.sequelize.sync(syncOptions);
//     })
//     .then(function () {
//         return db.sequelize.query("SET FOREIGN_KEY_CHECKS = 1");
//     })
//     .then(function () {
//         app.listen(PORT, function () {
//             console.log(
//                 "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
//                 PORT,
//                 PORT
//             );
//         });
//     });

// module.exports = app;
