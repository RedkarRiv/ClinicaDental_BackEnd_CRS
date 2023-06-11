'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

}
  }
  Appointment.init({
    user_id: DataTypes.INTEGER,
    employee_id: DataTypes.INTEGER,
    appointment_date: DataTypes.DATE,
    treatment: DataTypes.STRING,
    payment: DataTypes.FLOAT,
    comments: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Appointment',
  });
  return Appointment;
};