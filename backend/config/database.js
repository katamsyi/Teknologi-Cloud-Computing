const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("notesapp", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
