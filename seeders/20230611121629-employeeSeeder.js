'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Employees", 
    [
      {role_id:2, speciality_id:1, profesional_registration_id: "9865", user_id:7, createdAt: "2023-06-05 00:00:00", updatedAt: "2023-06-05 00:00:00"},
      {role_id:2, speciality_id:2, profesional_registration_id: "4554", user_id:8, createdAt: "2023-06-05 00:00:00", updatedAt: "2023-06-05 00:00:00"},
      {role_id:2, speciality_id:3, profesional_registration_id: "4432", user_id:9, createdAt: "2023-06-05 00:00:00", updatedAt: "2023-06-05 00:00:00"},
      {role_id:2, speciality_id:4, profesional_registration_id: "3324", user_id:10, createdAt: "2023-06-05 00:00:00", updatedAt: "2023-06-05 00:00:00"},
      {role_id:2, speciality_id:5, profesional_registration_id: "1124", user_id:11, createdAt: "2023-06-05 00:00:00", updatedAt: "2023-06-05 00:00:00"},

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