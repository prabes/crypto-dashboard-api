const Sequelize = require("sequelize");
require('dotenv').config();

// #TODO pass db configs from .env
const databaseInstance = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
	host: process.env.DB_HOST,
	dialect: "postgres",
	pool: {
		max: 5,
		min: 0,
		acquire: 3000,
		idle: 10000,
	}
});

module.exports = databaseInstance;
