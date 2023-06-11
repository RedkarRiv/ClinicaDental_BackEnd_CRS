'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", 
    [
      {id: 1, name: "Alberto", surname: "Alvarez", dni: "54675489K", email:"aalvarez@gol.com", phone: 664532843, password: "12345", role_id:1, createdAt: "2023-06-05 00:00:00", updatedAt: "2023-06-05 00:00:00"},
      {id: 2, name: "Beatriz", surname: "Blasco", dni: "43567489J", email:"bblasco@gol.com", phone: 676856843, password: "54321", role_id:1, createdAt: "2023-06-05 00:00:00", updatedAt: "2023-06-05 00:00:00"},
      {id: 3, name: "Cristina", surname: "Camaro", dni: "22267489T", email:"ccamaro@gol.com", phone: 676855555, password: "a12345", role_id:1, createdAt: "2023-06-05 00:00:00", updatedAt: "2023-06-05 00:00:00"},
      {id: 4, name: "Daniel", surname: "Donato", dni: "11267489J", email:"ddonato@gol.com", phone: 776856843, password: "d54321", role_id:1, createdAt: "2023-06-05 00:00:00", updatedAt: "2023-06-05 00:00:00"},
      {id: 7, name: "Pepe", surname: "Puebla", dni: "54674389K", email:"ppuebla@gol.com", phone: 664444843, password: "12345", role_id:2, createdAt: "2023-06-05 00:00:00", updatedAt: "2023-06-05 00:00:00"},
      {id: 8, name: "Marta", surname: "Martinez", dni: "43567489O", email:"mmartinez@gol.com", phone: 670006843, password: "54321", role_id:2, createdAt: "2023-06-05 00:00:00", updatedAt: "2023-06-05 00:00:00"},
      {id: 9, name: "Pedro", surname: "Palomares", dni: "22267489U", email:"ppalomares@gol.com", phone: 676877855, password: "c12345", role_id:2, createdAt: "2023-06-05 00:00:00", updatedAt: "2023-06-05 00:00:00"},
      {id: 10, name: "Sara", surname: "Sueca", dni: "11267489I", email:"ssueca@gol.com", phone: 773356843, password: "a54321", role_id:2, createdAt: "2023-06-05 00:00:00", updatedAt: "2023-06-05 00:00:00"},
      {id: 11, name: "Zaida", surname: "Zore", dni: "11223489L", email:"zzore@gol.com", phone: 773222843, password: "b12345", role_id:2, createdAt: "2023-06-05 00:00:00", updatedAt: "2023-06-05 00:00:00"},

    ]
  )},
  async down (queryInterface, Sequelize) {

  }
};
