const dbInstance = require("../config/db");
const { fetchDetailsFromCoinmarketAPI } = require("../utils/fetch_marketcap_data");

const CryptoDetail = require("../models/cryptoDetails");
const parse = require("nodemon/lib/cli/parse");

const queryInterface = dbInstance.getQueryInterface();

// fetch
// parse
// insert

const insertCryptoDetailsIntoTable = async () => {
	const marketData = await fetchDetailsFromCoinmarketAPI();
	// console.log("CHECK::", marketData.data[0])
	const parsedData = marketData.data.map((marketDataRow) => {
		return {
			name: marketDataRow.name,
			coinId: marketDataRow.id,
			symbol: marketDataRow.symbol,
			slug: marketDataRow.slug,
			max_supply: marketDataRow.max_supply,
			price_usd: marketDataRow.price_usd,
			volume_24hr: marketDataRow.volume_24hr,
			percentage_change_24h: marketDataRow.percentage_change_24h,
			percentage_change_7d: marketDataRow.percentage_change_7d,
			market_cap: marketDataRow.market_cap,
			cmc_rank: marketDataRow.cmc_rank,
			total_supply: marketDataRow.total_supply,
			last_updated: marketDataRow.last_updated,
			date_added: marketDataRow.date_added,
		}
	});
	// console.log(parsedData)
	parsedData.forEach((parsedCoin) => {
		CryptoDetail.create(
			parsedCoin
		)
 });
// CryptoDetail.bulkCreate(parsedData,{
// 	ignoreDuplicates: true,
// })
}

insertCryptoDetailsIntoTable();