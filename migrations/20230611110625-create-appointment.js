'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Appointments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        references:{
          model: "Users",
          key: "id"
        }
      },
      employee_id: {
        type: Sequelize.INTEGER,
        references:{
          model: "Employees",
          key: "id"
        }
      },
      appointment_date: {
        type: Sequelize.DATE
      },
      treatment: {
        type: Sequelize.STRING,
        references:{
          model: "Treatments",
          key: "name"
        }
      },
      payment: {
        type: Sequelize.FLOAT
      },
      comments: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Appointments');
  }
};