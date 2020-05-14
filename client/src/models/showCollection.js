module.exports = function (sequelize, DataTypes) {
  var showCollection = sequelize.define("showCollection", {
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [45,150],
      },
    },
    title1: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    title2: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    title3: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    title4: {
      type: DataTypes.TEXT,
      validate: {
        len: [1],
      },
    },
    title5: {
      type: DataTypes.TEXT,
      validate: {
        len: [1],
      },
    },
    title7: {
      type: DataTypes.TEXT,
      validate: {
        len: [1],
      },
    },
    title7: {
      type: DataTypes.TEXT,
      validate: {
        len: [1],
      },
    },
    upVotes: {
      type: DataTypes.INTEGER,
    },
    downVotes: {
      type: DataTypes.INTEGER,
    },
  });

  showCollection.associate = function (models) {
    showCollection.belongsTo(models.user, {
      foreignKey: {
        allowNull: false,
      },
      onDelete: "cascade",
    });
    showCollection.hasMany(models.showComment, {
      foreignKey: {
        allowNull: false,
      },
      onDelete: "cascade",
    });
  };

  return showCollection;
};
