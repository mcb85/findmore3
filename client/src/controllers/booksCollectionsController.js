const db = require("../models/bookCollection");
const { Op } = require("sequelize");

module.exports = {
  findByTitle: function (req, res) {
    db.bookCollection
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
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.bookCollection
      .findOne({ where: { id: req.params.id } })
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
  findByUserId: function (req, res) {
    db.bookCollection
      .findOne({
        include: [{ model: db.user }],
        where: { userId: req.params.id },
      })
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.bookCollection
      .create(req.body)
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
  updateUpVotes: function (req, res) {
    db.bookCollection
      .update({upVotes: (req.params.votes + 1)},{ where: {id: req.params.id} })
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
  updateDownVotes: function (req, res) {
    db.bookCollection
      .update({downVotes: (req.params.votes - 1)},{ where: {id: req.params.id} })
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.bookCollection
      .destroy({ where: { id: req.params.id } })
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
};
