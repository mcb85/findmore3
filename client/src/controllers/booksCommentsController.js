const db = require("../models");
const { Op } = require("sequelize");

module.exports = {
  findByCollection: function (req, res) {
    db.bookComment
      .findAll({
        include: [{ model: db.bookCollention }],
        where: {
          bookCollectionId: req.params.id
        }
      })
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.bookComment
      .create(req.body)
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.bookComment
      .destroy({ where: { id: req.params.id } })
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
};
