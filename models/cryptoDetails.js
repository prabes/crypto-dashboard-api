const sequelize = require("../config/db")

const { DataTypes } = require("sequelize")

const CryptoDetail = sequelize.define("crypto_details", {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
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
		type: DataTypes.STRING,
	},
	volume_24hr: {
		type: DataTypes.INTEGER,
	},
	percentage_change_24h: {
		type: DataTypes.INTEGER,
	},
	percentage_change_7d: {
		type: DataTypes.INTEGER,
	},
	market_cap: {
		type: DataTypes.INTEGER,
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

	// volume_change_24hr: {
	// 	type: DataTypes.INTEGER,
	// 	allowNull: false,
	// },
	// percentage_change_1h: {
	// 	type: DataTypes.INTEGER,
	// 	allowNull: false,
	// },

	// market_cap_dominance: {
	// 	type: DataTypes.INTEGER,
	// 	allowNull: false,
	// },
	// fully_diluted_market_cap: {
	// 	type: DataTypes.INTEGER,
	// 	allowNull: false,
	// },
})

module.exports = CryptoDetail;