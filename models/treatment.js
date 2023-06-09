"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Treatment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Treatment.hasMany(models.Appointment, {
        foreignKey: "treatment",
      });
    }
  }
  Treatment.init(
    {
      name: DataTypes.STRING,
      comments: DataTypes.STRING,
      price: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "Treatment",
    }
  );
  return Treatment;
};
