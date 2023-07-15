require ("dotenv").config()


module.exports = {
  "development": {
    "username": process.env.USER,
    "password": process.env.PASSWORD,
    "database": process.env.DDBBNAME,
    "host": process.env.MYSQL_HOST,
    "dialect": "mysql",
    "port": process.env.MYSQL_PORT
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.USER,
    "password": process.env.PASSWORD,
    "database": process.env.DDBBNAME,
    "host": process.env.MYSQL_HOST,
    "dialect": "mysql",
    "port": process.env.MYSQL_PORT
    
  }
}
