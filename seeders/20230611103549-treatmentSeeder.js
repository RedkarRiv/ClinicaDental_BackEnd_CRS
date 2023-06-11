'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Treatments", 
    [
      {id: 1, name: "Consulta", comments: "Consulta ordinaria", price: "30", createdAt: "2023-06-05 00:00:00", updatedAt: "2023-06-05 00:00:00"},
      {id: 2, name: "Revisión", comments: "Revisión de estado y diagnostico básico", price: "45", createdAt: "2023-06-05 00:00:00", updatedAt: "2023-06-05 00:00:00"},
      {id: 3, name: "Limpieza bucal", comments: "Limpieza bucal básica", price: "25", createdAt: "2023-06-05 00:00:00", updatedAt: "2023-06-05 00:00:00"},
      {id: 4, name: "Extracción", comments: "Extracción simple", price: "65", createdAt: "2023-06-05 00:00:00", updatedAt: "2023-06-05 00:00:00"},
      {id: 5, name: "Empaste", comments: "Empaste ordinario", price: "55", createdAt: "2023-06-05 00:00:00", updatedAt: "2023-06-05 00:00:00"},
      {id: 6, name: "Intervención especial", comments: "Intervención especifica según especialidad y estado del paciente", price: "150", createdAt: "2023-06-05 00:00:00", updatedAt: "2023-06-05 00:00:00"},
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
