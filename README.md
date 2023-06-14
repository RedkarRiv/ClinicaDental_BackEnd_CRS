# BackEnd - Clinica Dental
BackEnd project for GeeksHubs with **EXPRESS, NODE.JS, JAVASCRIPT, DOCKER, MYSQL, SEQUELIZE, POSTMAN, JWT y BCRYPT.**


## Índice

- [🎯Objetivo🎯](#objetivo)
- [🪛Desarrollo🪛](#desarrollo)
- [📍Diagrama ER📍](#diagrama-er)
- [🏠Instalación🏠](#instalacion)
- [⏺️EndPoints🔚](#endpoints)
- [👏Agradecimientos👏](#agradecimientos)


### 🎯 Objetivo 🎯

El objetivo de este proyecto es desarrollar desde cero una API funcional para una clinica dental con distintas relaciones en la BBDD. 

Para cumplir el objetivo se han incluido los endpoints necesarios para la creación, visualización, edición y eliminación de usuarios, profesionales y citas medicas, así como otras consultas de carácter analítico según los perfiles que los demanden.



<img src="https://camo.githubusercontent.com/8286a45a106e1a3c07489f83a38159981d888518a740b59c807ffc1b7b1e2f7b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f657870726573732e6a732d2532333430346435392e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d65787072657373266c6f676f436f6c6f723d253233363144414642" data-canonical-src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&amp;logo=express&amp;logoColor=%2361DAFB" style="max-width: 100%;"> <img src="https://camo.githubusercontent.com/a101467fe68ef07bba498b3e4a62a62e861ef0fe93302a1076b01ae7893af544/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e6f64652e6a732d3032364530303f7374796c653d666f722d7468652d6261646765266c6f676f3d6e6f64652e6a73266c6f676f436f6c6f723d7768697465" data-canonical-src="https://img.shields.io/badge/node.js-026E00?style=for-the-badge&amp;logo=node.js&amp;logoColor=white" style="max-width: 100%;"> <img src="https://camo.githubusercontent.com/aeddc848275a1ffce386dc81c04541654ca07b2c43bbb8ad251085c962672aea/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a6176617363726970742d2532333332333333302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d253233463744463145" alt="JavaScript" data-canonical-src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&amp;logo=javascript&amp;logoColor=%23F7DF1E" style="max-width: 100%;"> <img src="https://user-images.githubusercontent.com/121863208/227808612-8d3f0fee-99d9-45d8-8274-6584c9ac0b38.svg" style="max-width: 100%;"> <img src="https://user-images.githubusercontent.com/121863208/227808620-cd6e5d5c-dd63-4a9d-b19d-0983807cae95.svg" style="max-width: 100%;"> <img src="https://camo.githubusercontent.com/b184cf7adbab9f5464e80c0f5dd32c85393f6248499a57d743e619f4214391c4/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f646f636b65722d3234393645443f7374796c653d666f722d7468652d6261646765266c6f676f3d646f636b6572266c6f676f436f6c6f723d7768697465" alt="DOCKER" data-canonical-src="https://img.shields.io/badge/docker-2496ED?style=for-the-badge&amp;logo=docker&amp;logoColor=white" style="max-width: 100%;"> <img src="https://camo.githubusercontent.com/902ef9f04d190cba77c41b8dc217260698573f992a2d46bf37e75161912caadd/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6d7973716c2d3345364539333f7374796c653d666f722d7468652d6261646765266c6f676f3d6d7973716c266c6f676f436f6c6f723d7768697465" alt="MYSQL" data-canonical-src="https://img.shields.io/badge/mysql-3E6E93?style=for-the-badge&amp;logo=mysql&amp;logoColor=white" style="max-width: 100%;"> <img src="https://camo.githubusercontent.com/c0303b8bf28065067be013ecbfa1447392b6d328a38362de9beb6d14f810544f/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f73657175656c697a652d3343373643333f7374796c653d666f722d7468652d6261646765266c6f676f3d73657175656c697a65266c6f676f436f6c6f723d7768697465" alt="SEQUELIZE" data-canonical-src="https://img.shields.io/badge/sequelize-3C76C3?style=for-the-badge&amp;logo=sequelize&amp;logoColor=white" style="max-width: 100%;"> <img src="https://camo.githubusercontent.com/3f0e26b0951bab845a1bb9a7198ecca0da272e462921b6edd85879f3673b6927/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f506f73746d616e2d4646364333373f7374796c653d666f722d7468652d6261646765266c6f676f3d706f73746d616e266c6f676f436f6c6f723d7768697465" alt="Postman" data-canonical-src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&amp;logo=postman&amp;logoColor=white" style="max-width: 100%;"> <img src="https://camo.githubusercontent.com/4590c0af4aeb1b75233885f86e80c1da8cb2afd401173a40e41370f5cad5db20/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4a57542d626c61636b3f7374796c653d666f722d7468652d6261646765266c6f676f3d4a534f4e253230776562253230746f6b656e73" alt="JWT" data-canonical-src="https://img.shields.io/badge/JWT-black?style=for-the-badge&amp;logo=JSON%20web%20tokens" style="max-width: 100%;">

### 🪛 Desarrollo 🪛

La API ha sido desarrollada por Carlos Redondo como parte de la formación Full Stack Developer de GeeksHubs. 

Para la realización del proyecto, se han utilizado el siguiente stack tecnologico:

La API se ha desarrollado en una BBDD relacional con relaciones uno a muchos y muchos a muchos entre las distintas tablas. Se ha priorizado la compartimentación de los datos y se ha evitado la duplicidad de datos entre tablas, haciendo uso de las consultas para mejorar el rendimiento. 

La inicialización del servidor y configuración se ha realizado mediante las tecnologias **NODE.JS, JAVASCRIPT y EXPRESS.**

Para la conexión y gestión de la BBDD desde nuestra API, se han utilizado las tecnologias **SEQUELIZE y MYSQL.**

La seguridad y codificación de las contraseñas se ha realizado mediante **BCRYPT** y la creación y gestión de TOKENS mediante **JWT.**

Por último, **POSTMAN** como simulador de Font-end para la comprobación y validación de las consultas realizadas en nuestras API.


### 📍 Diagrama ER 📍

<p align="center">
<img src="https://raw.githubusercontent.com/RedkarRiv/ClinicaDental_BackEnd_CRS/develop/img/diagramaER2.png"  width="600" height="600"></p>

<p align="center">
<img src="https://raw.githubusercontent.com/RedkarRiv/ClinicaDental_BackEnd_CRS/master/img/diagramaER2.png"  width="600" height="600"></p>


### 🏠 Instalacion 🏠
1. Clonamos el repositorio: https://github.com/RedkarRiv/Project_BACKEND_Dentista.git
2. Instalamos dependecias: ` $ npm install `
3. Añadimos el script para desarrollo: `"dev": "nodemon index.js",`
4. Conectamos el repositorio a la BBDD 
5. ``` $ Ejecutamos las migraciones ``` 
6. ``` $ Ejecutamos los seeders ``` 
7. ``` $ npm run dev ```


### ⏺️ EndPoints 🔚

Se han incluido los siguientes Endpoints:

**Registro de usuarios**: localhost:3000/auth/register

**Login de usuarios**: localhost:3000/auth/login

**Eliminar usuarios**: localhost:3000/users/14 (solo ADMIN)

**Actualizar usuarios**: localhost:3000/users/update

**Ver mi perfil de usuario**: localhost:3000/users/

**Ver todos los usuarios**: localhost:3000/users/all (solo ADMIN)

**Crear cita médica**: localhost:3000/appointment/new

**Eliminar cita**: localhost:3000/appointment/delete

**Actualizar cita**: localhost:3000/appointment/update

**Ver cita**: localhost:3000/appointment/visit

**Ver todas las citas del usuario**: localhost:3000/appointment/all

**Ver todas las citas del doctor**: localhost:3000/appointment/list

**Ver todos los pacientes por doctor**: localhost:3000/users/patients/


### 👏 Agradecimientos 👏

Este proyecto no habría sido posible sin el inestimable ayuda de Dani Tarazona y David Ochando como profesores y el apoyo de todos los compañeros, con especial mención a Alejandro Cabeza, Hector Mateu, Oriana y Eduardo Kiriakos.

Tambien quiero aprovechar para dar las gracias a mi mujer por su paciencia siendo mi patito de goma durante todo el proceso.

Si eres desarrollador, te apasiona el mundo de la programación y te gusta colaborar, puedes ponerte en contacto con nuestro equipo en: *gbc_friendsfamilyandfruits@rockon.geeks*.
