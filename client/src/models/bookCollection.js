module.exports = function (sequelize, DataTypes) {
    var bookCollection = sequelize.define("bookCollection", {
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
  
    bookCollection.associate = function (models) {
      bookCollection.belongsTo(models.user, {
        foreignKey: {
          allowNull: false,
        },
        onDelete: "cascade",
      });
      bookCollection.hasMany(models.bookComment, {
        foreignKey: {
          allowNull: false,
        },
        onDelete: "cascade",
      });
    };
  
    return bookCollection;
  };