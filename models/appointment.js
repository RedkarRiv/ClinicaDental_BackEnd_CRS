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
        Appointment.belongsTo(models.Employee,
          {
            foreignKey:"employee_id",
            as: "doctor"
          })
        Appointment.belongsTo(models.User,
          {
            foreignKey:"user_id",
            as: "patient"
          })
        Appointment.belongsTo(models.Treatment,
          {
            foreignKey:"treatment"
          })  
      }
    }
    Appointment.init({
      user_id: DataTypes.INTEGER,
      employee_id: DataTypes.INTEGER,
      appointment_date: DataTypes.DATE,
      treatment: DataTypes.INTEGER,
      price: DataTypes.FLOAT,
      comments: DataTypes.STRING
    }, {
      sequelize,
      modelName: 'Appointment',
    });
    return Appointment;
  };