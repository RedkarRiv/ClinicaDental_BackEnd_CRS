"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Appointment, {
        foreignKey: "user_id",
        as: "patient",
      });
      User.hasOne(models.Employee, { foreignKey: "user_id" });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      surname: DataTypes.STRING,
      dni: DataTypes.STRING,
      cp: DataTypes.INTEGER,
      birth_date: DataTypes.DATE,
      phone: DataTypes.INTEGER,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
