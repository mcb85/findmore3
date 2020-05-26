const db = require("../models");
const { Op } = require("sequelize");

module.exports = {
  findByCollection: function (req, res) {
    db.movieComment
      .findAll({
        include: [{ model: db.movieCollection }],
        where: {
          movieCollectionId: req.params.movieCollectionId
        }
      })
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
  createComment: function (req, res) {
    db.movieComment
      .create(req.body)
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.movieComment
      .destroy({ where: { id: req.params.movieCollectionId } })
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
};