const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('beavers', 'asus', '123', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;