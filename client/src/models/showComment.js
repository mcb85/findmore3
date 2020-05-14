module.exports = function (sequelize, DataTypes) {
  var showComment = sequelize.define("showComment", {
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [45, 250],
      },
    },
  });

  showComment.associate = function (models) {
    showComment.belongsTo(models.showCollection, {
      foreignKey: {
        allowNull: false,
      },
      onDelete: "cascade",
    });
  };

  return showComment;
};
