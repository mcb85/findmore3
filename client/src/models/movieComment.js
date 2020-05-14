module.exports = function (sequelize, DataTypes) {
  var movieComment = sequelize.define("movieComment", {
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [45, 250],
      },
    },
  });

  movieComment.associate = function (models) {
    movieComment.belongsTo(models.movieCollection, {
      foreignKey: {
        allowNull: false,
      },
      onDelete: "cascade",
    });
  };

  return movieComment;
};
