const db = require("../models");
const { Op } = require("sequelize");

module.exports = {
  findByCollection: function (req, res) {
    db.movieComment
      .findAll({
        include: [{ model: db.movieCollention }],
        where: {
          movieCollectionId: req.params.movieCollectionid
        }
      })
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.movieComment
      .create(req.body)
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.movieComment
      .destroy({ where: { id: req.params.id } })
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
};