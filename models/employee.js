"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Employee.hasMany(models.Appointment, {
        foreignKey: "employee_id",
        as: "doctor",
      });
      Employee.hasOne(models.User, { foreignKey: "id" });
    }
  }
  Employee.init(
    {
      user_id: DataTypes.INTEGER,
      speciality_id: DataTypes.INTEGER,
      profesional_registration_id: DataTypes.INTEGER,
      active_status: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Employee",
    }
  );
  return Employee;
};
