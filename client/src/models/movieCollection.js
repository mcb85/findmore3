module.exports = function (sequelize, DataTypes) {
    var movieCollection = sequelize.define("movieCollection", {
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1,150],
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
      },
      title5: {
        type: DataTypes.TEXT,
      },
      title6: {
        type: DataTypes.TEXT,
      },
      title7: {
        type: DataTypes.TEXT,
      },
      upVotes: {
        type: DataTypes.INTEGER,
      },
      downVotes: {
        type: DataTypes.INTEGER,
      },
    });
  
    movieCollection.associate = function (models) {
      movieCollection.belongsTo(models.user  , {
        foreignKey: {
          allowNull: false,
        },
        onDelete: "cascade",
      });
      movieCollection.hasMany(models.movieComment, {
        foreignKey: {
          allowNull: false,
        },
        onDelete: "cascade",
      });
    };
  
    return movieCollection;
  };