"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Appointments", 
      [
        {
          id: 1,
          user_id: 1,
          employee_id: 7,
          appointment_date: "2023-06-05 12:00",
          treatment: 1,
          comments: "Siento un dolor intenso en mis dientes que no puedo soportar",
          status: "Anulada",
          createdAt: "2023-06-05 00:00:00",
          updatedAt: "2023-06-05 00:00:00",
        },
        {
          id: 2,
          user_id: 1,
          employee_id: 7,
          appointment_date: "2023-06-05 12:00",
          treatment: 2,
          comments: "El dolor en mis dientes es insoportable cada vez que bebo agua",
          status: "Concertada",
          createdAt: "2023-06-05 00:00:00",
          updatedAt: "2023-06-05 00:00:00",
        },
        {
          id: 3,
          user_id: 2,
          employee_id: 9,
          appointment_date: "2023-06-05 12:00",
          treatment: 1,
          comments: "Creo que tengo una muela rota",
          status: "Concertada",
          createdAt: "2023-06-05 00:00:00",
          updatedAt: "2023-06-05 00:00:00",
        },
        {
          id: 4,
          user_id: 3,
          employee_id: 9,
          appointment_date: "2023-06-05 12:00",
          treatment: 3,
          comments: "Quiero ponerme brackets",
          status: "Concertada",

          createdAt: "2023-06-05 00:00:00",
          updatedAt: "2023-06-05 00:00:00",
        },
        {
          id: 5,
          user_id: 3,
          employee_id: 9,
          appointment_date: "2023-06-05 12:00",
          treatment: 1,
          comments: "El dolor en mis dientes es tan intenso que no puedo describirlo con palabras",
          status: "Concertada",
          createdAt: "2023-06-05 00:00:00",
          updatedAt: "2023-06-05 00:00:00",
        },
        {
          id: 6,
          user_id: 3,
          employee_id: 7,
          appointment_date: "2023-06-05 12:00",
          treatment: 2,
          comments: "Necesito una limpieza bucal",
          status: "Anulada",
          createdAt: "2023-06-05 00:00:00",
          updatedAt: "2023-06-05 00:00:00",
        },
        {
          id: 7,
          user_id: 1,
          employee_id: 7,
          appointment_date: "2023-06-05 12:00",
          treatment: 3,
          comments: "El dolor en mis dientes es una locura, necesito encontrar una solución pronto",
          status: "Concertada",
          createdAt: "2023-06-05 00:00:00",
          updatedAt: "2023-06-05 00:00:00",
        },
        {
          id: 8,
          user_id: 4,
          employee_id: 10,
          appointment_date: "2023-06-05 12:00",
          treatment: 4,
          status: "Concertada",
          comments: "Siento un dolor agudo en mi boca que me impide comer adecuadamente",
          createdAt: "2023-06-05 00:00:00",
          updatedAt: "2023-06-05 00:00:00",
        },
        {
          id: 9,
          user_id: 4,
          employee_id: 8,
          appointment_date: "2023-06-05 12:00",
          treatment: 5,
          status: "Concertada",
          comments: "Me duele la mandibula cada vez que hablo",
          createdAt: "2023-06-05 00:00:00",
          updatedAt: "2023-06-05 00:00:00",
        },
        {
          id: 10,
          user_id: 2,
          employee_id: 8,
          appointment_date: "2023-06-05 12:00",
          treatment: 5,
          status: "Concertada",
          comments: "Me ha salido un bulto en la lengua",
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
