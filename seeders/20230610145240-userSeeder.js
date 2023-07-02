"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        id: 1,
        name: "Alberto",
        surname: "Alvarez",
        dni: "54675489K",
        cp: 46001,
        birth_date: "1989-06-05",
        email: "aalvarez@gol.com",
        phone: 664532843,
        password:
          "$2b$08$I1k1LFIUtwCrJV9RO8f/Su2Du0d/oryyyqjU7aIchRWdW30raPZx6",
        role_id: 1,
        avatar_img:
          "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png",

        createdAt: "2023-06-05 00:00:00",
        updatedAt: "2023-06-05 00:00:00",
      },
      {
        id: 2,
        name: "Beatriz",
        surname: "Blasco",
        dni: "43567489J",
        cp: 46002,
        birth_date: "1989-06-05",
        email: "bblasco@gol.com",
        phone: 676856843,
        password:
          "$2b$08$I1k1LFIUtwCrJV9RO8f/Su2Du0d/oryyyqjU7aIchRWdW30raPZx6",
        role_id: 1,
        avatar_img:
          "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png",

        createdAt: "2023-06-05 00:00:00",
        updatedAt: "2023-06-05 00:00:00",
      },
      {
        id: 3,
        name: "Cristina",
        surname: "Camaro",
        dni: "22267489T",
        cp: 46003,
        birth_date: "1989-06-05",
        email: "ccamaro@gol.com",
        phone: 676855555,
        password:
          "$2b$08$I1k1LFIUtwCrJV9RO8f/Su2Du0d/oryyyqjU7aIchRWdW30raPZx6",
        role_id: 1,
        avatar_img:
          "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png",

        createdAt: "2023-06-05 00:00:00",
        updatedAt: "2023-06-05 00:00:00",
      },
      {
        id: 4,
        name: "Daniel",
        surname: "Donato",
        dni: "11267489J",
        cp: 46004,
        birth_date: "1989-06-05",
        email: "ddonato@gol.com",
        phone: 776856843,
        password:
          "$2b$08$I1k1LFIUtwCrJV9RO8f/Su2Du0d/oryyyqjU7aIchRWdW30raPZx6",
        role_id: 1,
        avatar_img:
          "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png",

        createdAt: "2023-06-05 00:00:00",
        updatedAt: "2023-06-05 00:00:00",
      },
      {
        id: 7,
        name: "Pepe",
        surname: "Puebla",
        dni: "54674389K",
        cp: 46005,
        birth_date: "1989-06-05",
        email: "ppuebla@gol.com",
        phone: 664444843,
        password:
          "$2b$08$I1k1LFIUtwCrJV9RO8f/Su2Du0d/oryyyqjU7aIchRWdW30raPZx6",
        role_id: 1,
        avatar_img:
          "https://www.shareicon.net/data/512x512/2016/08/18/813847_people_512x512.png",

        createdAt: "2023-06-05 00:00:00",
        updatedAt: "2023-06-05 00:00:00",
      },
      {
        id: 8,
        name: "Marta",
        surname: "Martinez",
        dni: "43567489O",
        cp: 46006,
        birth_date: "1989-06-05",
        email: "mmartinez@gol.com",
        phone: 670006843,
        password:
          "$2b$08$I1k1LFIUtwCrJV9RO8f/Su2Du0d/oryyyqjU7aIchRWdW30raPZx6",
        role_id: 2,
        avatar_img:
          "https://www.shareicon.net/data/512x512/2016/08/18/813847_people_512x512.png",

        createdAt: "2023-06-05 00:00:00",
        updatedAt: "2023-06-05 00:00:00",
      },
      {
        id: 9,
        name: "Pedro",
        surname: "Palomares",
        dni: "22267489U",
        cp: 46007,
        birth_date: "1989-06-05",
        email: "ppalomares@gol.com",
        phone: 676877855,
        password:
          "$2b$08$I1k1LFIUtwCrJV9RO8f/Su2Du0d/oryyyqjU7aIchRWdW30raPZx6",
        role_id: 2,
        avatar_img:
          "https://www.shareicon.net/data/512x512/2016/08/18/813847_people_512x512.png",
        createdAt: "2023-06-05 00:00:00",
        updatedAt: "2023-06-05 00:00:00",
      },
      {
        id: 10,
        name: "Sara",
        surname: "Sueca",
        dni: "11267489I",
        cp: 46008,
        birth_date: "1989-06-05",
        email: "ssueca@gol.com",
        phone: 773356843,
        password:
          "$2b$08$I1k1LFIUtwCrJV9RO8f/Su2Du0d/oryyyqjU7aIchRWdW30raPZx6",
        role_id: 2,
        avatar_img:
          "https://www.shareicon.net/data/512x512/2016/08/18/813847_people_512x512.png",
        createdAt: "2023-06-05 00:00:00",
        updatedAt: "2023-06-05 00:00:00",
      },
      {
        id: 11,
        name: "Zaida",
        surname: "Zore",
        dni: "11223489L",
        cp: 46009,
        birth_date: "1989-06-05",
        email: "zzore@gol.com",
        phone: 773222843,
        password:
          "$2b$08$I1k1LFIUtwCrJV9RO8f/Su2Du0d/oryyyqjU7aIchRWdW30raPZx6",
        role_id: 2,
        avatar_img:
          "https://www.shareicon.net/data/512x512/2016/08/18/813847_people_512x512.png",
        createdAt: "2023-06-05 00:00:00",
        updatedAt: "2023-06-05 00:00:00",
      },
      {
        id: 12,
        name: "Marcos",
        surname: "Ruperto",
        dni: "1126689L",
        cp: 46010,
        birth_date: "1989-06-05",
        email: "rruper@gol.com",
        phone: 673222843,
        password:
          "$2b$08$I1k1LFIUtwCrJV9RO8f/Su2Du0d/oryyyqjU7aIchRWdW30raPZx6",
        role_id: 2,
        avatar_img:
          "https://www.shareicon.net/data/512x512/2016/08/18/813847_people_512x512.png",
        createdAt: "2023-06-05 00:00:00",
        updatedAt: "2023-06-05 00:00:00",
      },
      {
        id: 13,
        name: "Admin",
        surname: "Nimda",
        dni: "00000001A",
        cp: 46011,
        birth_date: "1989-06-05",
        email: "admin@admin.com",
        phone: 666996699,
        password:
          "$2b$08$I1k1LFIUtwCrJV9RO8f/Su2Du0d/oryyyqjU7aIchRWdW30raPZx6",
        role_id: 3,
        avatar_img:
          "https://w7.pngwing.com/pngs/812/462/png-transparent-account-avatar-profile-user-avatars-icon.png",
        createdAt: "2023-06-05 00:00:00",
        updatedAt: "2023-06-05 00:00:00",
      },
    ]);
  },
  async down(queryInterface, Sequelize) {},
};
