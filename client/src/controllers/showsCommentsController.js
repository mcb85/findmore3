const db = require("../models");
const { Op } = require("sequelize");

module.exports = {
  findByCollection: function (req, res) {
    db.showComment
      .findAll({
        include: [{ model: db.showCollention }],
        where: {
          showCollectionId: req.params.showCollectionid
        }
      })
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.showComment
      .create(req.body)
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.showComment
      .destroy({ where: { id: req.params.id } })
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
};