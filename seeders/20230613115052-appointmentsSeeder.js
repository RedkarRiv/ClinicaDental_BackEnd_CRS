"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Appointments", [
      {
        id: 1,
        user_id: 1,
        employee_id: 6,
        appointment_date: "2023-06-05 00:00:00",
        treatment: 1,
        comments: "Me duele mucho",
        createdAt: "2023-06-05 00:00:00",
        updatedAt: "2023-06-05 00:00:00",
      },
      {
        id: 2,
        user_id: 1,
        employee_id: 6,
        appointment_date: "2023-06-05 00:00:00",
        treatment: 2,
        comments: "Me duele mucho, muchisimo",
        createdAt: "2023-06-05 00:00:00",
        updatedAt: "2023-06-05 00:00:00",
      },
      {
        id: 3,
        user_id: 2,
        employee_id: 9,
        appointment_date: "2023-06-05 00:00:00",
        treatment: 1,
        comments: "Me duele demasiado",
        createdAt: "2023-06-05 00:00:00",
        updatedAt: "2023-06-05 00:00:00",
      },
      {
        id: 4,
        user_id: 3,
        employee_id: 9,
        appointment_date: "2023-06-05 00:00:00",
        treatment: 3,
        comments: "Me duele exageradamente",
        createdAt: "2023-06-05 00:00:00",
        updatedAt: "2023-06-05 00:00:00",
      },
      {
        id: 5,
        user_id: 3,
        employee_id: 9,
        appointment_date: "2023-06-05 00:00:00",
        treatment: 1,
        comments: "Me duele que no os podeis hacer una idea",
        createdAt: "2023-06-05 00:00:00",
        updatedAt: "2023-06-05 00:00:00",
      },
      {
        id: 6,
        user_id: 3,
        employee_id: 7,
        appointment_date: "2023-06-05 00:00:00",
        treatment: 2,
        comments: "Me duele más de lo que deberia",
        createdAt: "2023-06-05 00:00:00",
        updatedAt: "2023-06-05 00:00:00",
      },
      {
        id: 7,
        user_id: 1,
        employee_id: 7,
        appointment_date: "2023-06-05 00:00:00",
        treatment: 3,
        comments: "Me duele una locura",
        createdAt: "2023-06-05 00:00:00",
        updatedAt: "2023-06-05 00:00:00",
      },
      {
        id: 8,
        user_id: 4,
        employee_id: 10,
        appointment_date: "2023-06-05 00:00:00",
        treatment: 4,
        comments: "Me duele mucho",
        createdAt: "2023-06-05 00:00:00",
        updatedAt: "2023-06-05 00:00:00",
      },
      {
        id: 9,
        user_id: 4,
        employee_id: 8,
        appointment_date: "2023-06-05 00:00:00",
        treatment: 5,
        comments: "Me duele mucho",
        createdAt: "2023-06-05 00:00:00",
        updatedAt: "2023-06-05 00:00:00",
      },
      {
        id: 10,
        user_id: 2,
        employee_id: 8,
        appointment_date: "2023-06-05 00:00:00",
        treatment: 5,
        comments: "Me duele mucho",
        createdAt: "2023-06-05 00:00:00",
        updatedAt: "2023-06-05 00:00:00",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
