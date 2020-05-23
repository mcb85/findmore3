const db = require("../models");
const { Op } = require("sequelize");

module.exports = {
  findByTitle: function (req, res) {
    console.log("finding by title: " + JSON.stringify(req.params));
    db.movieCollection
      .findAll({
        where: {
          [Op.or]: [
            { title1: req.params.title },
            { title2: req.params.title },
            { title3: req.params.title },
            { title4: req.params.title },
            { title5: req.params.title },
            { title6: req.params.title },
            { title7: req.params.title },
          ],
        },
      })
      .then((data) => {
        console.log("findByTitle: data returned");
        res.json(data)
      })
      .catch((err) => {
        console.log("findByTitle: error received " + JSON.stringify(err.message));
        res.status(422).json(err)
      });
    console.log("exiting findByTitle");
  },
  findById: function (req, res) {
    db.movieCollection
      .findOne({ where: { id: req.params.id } })
      .then((data) => res.json(data))
      .catch((err) =>
        res.status(422).json(err));
  },
  findByUserId: function (req, res) {
    db.movieCollection
      .findAll({
        include: [{ model: db.user }],
        where: { userId: req.params.userId },
      })
      .then((data) => res.json(data))
      .catch((err) => {
        console.log("find by user id");
        console.log(err);
        res.status(422).json(err);
      })
        
  },
  create: function (req, res) {
    console.log("calling create movies");
    db.movieCollection
      .create(req.body)
      .then(data => res.json(data))
      .catch((err) => {
        console.log("createCollection: error received " + JSON.stringify(err.message))
        console.log("createcollection" + data);
        console.log(err);
        res.status(422).json(err);
  })
  },
  updateUpVotes: function (req, res) {
    db.movieCollection
      .update({upVotes: (req.params.votes + 1)},{ where: {id: req.params.id} })
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
  updateDownVotes: function (req, res) {
    db.movieCollection
      .update({downVotes: (req.params.votes - 1)},{ where: {id: req.params.id} })
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.movieCollection
      .destroy({ where: { id: req.params.id } })
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
};
