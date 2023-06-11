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

models.Appointment.belongsTo(models.User),
models.Appointment.belongsTo(models.Treatment),
models.Appointment.belongsTo(models.Employee)

}
  }
  Appointment.init({
    user_id:{ 
      type: DataTypes.INTEGER,
      references: {
        model:"Users",
        key: "id",
      }
    },
    employee_id:{   
      type: DataTypes.INTEGER,
      references: {
        model:"Employees",
        key: "id",
      }
    },
    appointment_date: DataTypes.DATE,
    treatment:{   
      type: DataTypes.INTEGER,
      references: {
        model:"Treatments",
        key: "id",
      }
    },
    payment: DataTypes.FLOAT,
    comments: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Appointment',
  });
  return Appointment;
};