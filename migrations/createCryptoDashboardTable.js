
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db")

const queryInterface = sequelize.getQueryInterface();

queryInterface.createTable("crypto_details", {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		allowNull: false,
		autoIncrement: true,
	},
	coinId: {
		type: DataTypes.INTEGER,
	},
	name: {
		type: DataTypes.STRING,
	},
	symbol: {
		type: DataTypes.STRING,
	},
	slug: {
		type: DataTypes.STRING,
	},
	max_supply: {
		type: DataTypes.STRING,
	},
	price_usd: {
		type: DataTypes.FLOAT,
	},
	volume_24hr: {
		type: DataTypes.INTEGER,
	},
	percentage_change_24h: {
		type: DataTypes.FLOAT,
	},
	percentage_change_7d: {
		type: DataTypes.FLOAT
	},
	market_cap: {
		type: DataTypes.FLOAT,
	},
	cmc_rank: {
		type: DataTypes.INTEGER,
	},
	total_supply: {
		type: DataTypes.INTEGER,
	},

	last_updated: {
		type: DataTypes.STRING,
	},
	date_added: {
		type: DataTypes.STRING,
	},

	volume_change_24hr: {
		type: DataTypes.FLOAT,
	},
	percentage_change_1h: {
		type: DataTypes.FLOAT,
	},

	market_cap_dominance: {
		type: DataTypes.INTEGER,
	},
	fully_diluted_market_cap: {
		type: DataTypes.FLOAT,
	},
	createdAt: {
		type: DataTypes.STRING, 
	},
	updatedAt: {
		type: DataTypes.STRING, 
	}
})