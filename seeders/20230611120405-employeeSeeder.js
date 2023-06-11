'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Employees", 
    [
      {role_id: 2, speciality_id: , profesional_registration_id: "MD-9865", user_id:7, createdAt: "2023-06-05 00:00:00", updatedAt: "2023-06-05 00:00:00"},
      {role_id: 2, speciality_id: , profesional_registration_id: "MD-4554", user_id:8, createdAt: "2023-06-05 00:00:00", updatedAt: "2023-06-05 00:00:00"},
      {role_id: 2, speciality_id: , profesional_registration_id: "MD-4432", user_id:9, createdAt: "2023-06-05 00:00:00", updatedAt: "2023-06-05 00:00:00"},
      {role_id: 2, speciality_id: , profesional_registration_id: "MD-3324", user_id:10, createdAt: "2023-06-05 00:00:00", updatedAt: "2023-06-05 00:00:00"},
    ]
  )},
  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
