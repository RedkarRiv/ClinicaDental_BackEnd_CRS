"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Roles", [
      {
        id: 1,
        rol_name: "customer",
        createdAt: "2023-06-05 00:00:00",
        updatedAt: "2023-06-05 00:00:00",
      },
      {
        id: 2,
        rol_name: "employee",
        createdAt: "2023-06-05 00:00:00",
        updatedAt: "2023-06-05 00:00:00",
      },
      {
        id: 3,
        rol_name: "admin",
        createdAt: "2023-06-05 00:00:00",
        updatedAt: "2023-06-05 00:00:00",
      },
    ]);
  },
  async down(queryInterface, Sequelize) {},
};
