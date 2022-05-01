const Sequelize = require("sequelize");

// #TODO pass db configs from .env
const databaseInstance = new Sequelize('crypto_dashboard', 'postgres','', {
	host: 'localhost',
	dialect: "postgres",
	pool: {
		max: 5,
		min: 0,
		acquire: 3000,
		idle: 10000,
	}
});

module.exports = databaseInstance;

// export default databaseInstance;