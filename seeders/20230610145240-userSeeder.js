'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", 
    [
      {id: 1, name: "Alberto", surname: "Alvarez", dni: "54675489K", email:"aalvarez@gol.com", phone: 664532843, password: "12345", role_id:1, createdAt: "2023-06-05 00:00:00", updatedAt: "2023-06-05 00:00:00"},
      {id: 2, name: "Beatriz", surname: "Blasco", dni: "43567489J", email:"bblasco@gol.com", phone: 676856843, password: "54321", role_id:1, createdAt: "2023-06-05 00:00:00", updatedAt: "2023-06-05 00:00:00"},
      {id: 3, name: "Cristina", surname: "Camaro", dni: "22267489J", email:"ccamaro@gol.com", phone: 676855555, password: "a12345", role_id:1, createdAt: "2023-06-05 00:00:00", updatedAt: "2023-06-05 00:00:00"},
      {id: 4, name: "Daniel", surname: "Donato", dni: "11267489J", email:"ddonato@gol.com", phone: 776856843, password: "a54321", role_id:1, createdAt: "2023-06-05 00:00:00", updatedAt: "2023-06-05 00:00:00"},
    ]
  )},
  async down (queryInterface, Sequelize) {

  }
};
