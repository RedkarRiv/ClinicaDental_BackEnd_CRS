'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Specialities", 
    [
      {id:1, speciality_name:"Ortodoncista", createdAt: "2023-06-05 00:00:00", updatedAt: "2023-06-05 00:00:00"},
      {id:2, speciality_name:"Cirujano maxilofacial", createdAt: "2023-06-05 00:00:00", updatedAt: "2023-06-05 00:00:00"},
      {id:3, speciality_name:"Anestesista", createdAt: "2023-06-05 00:00:00", updatedAt: "2023-06-05 00:00:00"},
      {id:4, speciality_name:"Enfermeria", createdAt: "2023-06-05 00:00:00", updatedAt: "2023-06-05 00:00:00"},
      {id:5, speciality_name:"Administracion", createdAt: "2023-06-05 00:00:00", updatedAt: "2023-06-05 00:00:00"},

    ]
    )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
