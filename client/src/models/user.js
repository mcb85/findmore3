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
    }
  });

  user.associate = function(models) {
    user.hasMany(models.showCollection, {
      onDelete: "cascade"
    });
  };

  
  user.prototype.verifyPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

  user.addHook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(
      user.password, 10
    );
  });

  return user;
};