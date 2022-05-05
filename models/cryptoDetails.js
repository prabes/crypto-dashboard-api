const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

const CryptoDetail = sequelize.define("crypto_details", {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		allowNull: false,
		autoIncrement: true,
	},
	coinId: {
		type: DataTypes.INTEGER,
    allowNull: false
	},
	name: {
		type: DataTypes.STRING,
    allowNull: false
	},
	symbol: {
		type: DataTypes.STRING,
    allowNull: false
	},
	slug: {
		type: DataTypes.STRING,
    allowNull: false
	},
	circulating_supply: {
		type: DataTypes.FLOAT,
	},
	max_supply: {
		type: DataTypes.FLOAT,
	},
	price_usd: {
		type: DataTypes.FLOAT,
	},
	volume_24hr: {
		type: DataTypes.FLOAT,
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
	volume_change_24hr: {
		type: DataTypes.FLOAT,
	},
	percentage_change_1h: {
		type: DataTypes.FLOAT,
	},
	market_cap_dominance: {
		type: DataTypes.FLOAT,
	},
	fully_diluted_market_cap: {
		type: DataTypes.FLOAT,
	},
	createdAt: {
		type: DataTypes.DATE,
	},
	updatedAt: {
		type: DataTypes.DATE,
	}
});

module.exports = CryptoDetail;
