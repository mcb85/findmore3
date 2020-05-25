var bcrypt = require("bcryptjs");

module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define("user", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [8, 15],
        is: ["^[A-Za-z0-9_-]+$",'i']
      }
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [8],
        is: ["^[a-z0-9]+$",'i']
      }
    },

    savedCollections: {
      type: DataTypes.STRING,
      get() {
        if (this.getDataValue('savedCollections')) {
          return this.getDataValue('savedCollections').split(',')
        } else {
          return []
        }
        
      },
      set(val) {
        this.setDataValue('savedCollections', val.join(','));
      },
    }
  });

  user.associate = function(models) {
    user.hasMany(models.showCollection, {
      onDelete: "cascade"
    });
  };

  user.associate = function (models) {
    user.hasMany(models.movieCollection, {
      onDelete: "cascade"
    });
  };

  user.prototype.verifyPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  
  user.addHook("beforeCreate", function (user) {
    user.password = bcrypt.hashSync(
      user.password, 10
    );
  });
 

  return user;
};

