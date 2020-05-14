module.exports = function (sequelize, DataTypes) {
  var bookComment = sequelize.define("bookComment", {
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [45, 250],
      },
    },
  });

  bookComment.associate = function (models) {
    bookComment.belongsTo(models.bookCollection, {
      foreignKey: {
        allowNull: false,
      },
      onDelete: "cascade",
    });
  };

  return bookComment;
};
