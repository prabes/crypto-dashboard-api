const dbInstance = require("../config/db");
const { fetchDetailsFromCoinmarketAPI } = require("../utils/fetchMarketCapData");
const CryptoDetail = require("../models/cryptoDetails");
// const queryInterface = dbInstance.getQueryInterface();

const insertCryptoDetailsIntoTable = async () => {
	const marketData = await fetchDetailsFromCoinmarketAPI();
	const parsedData = marketData.data.data.map((marketDataRow) => {
		return {
			name: marketDataRow.name,
			coinId: marketDataRow.id,
			symbol: marketDataRow.symbol,
			slug: marketDataRow.slug,
			circulating_supply: marketDataRow.circulating_supply,
			max_supply: marketDataRow.max_supply,
			price_usd: marketDataRow.quote.USD.price,
			volume_24hr: marketDataRow.quote.USD.volume_24h,
			volume_change_24hr: marketDataRow.quote.USD.volume_change_24h,
			percentage_change_1h: marketDataRow.quote.USD.percent_change_1h,
			percentage_change_24h: marketDataRow.quote.USD.percent_change_24h,
			percentage_change_7d: marketDataRow.quote.USD.percent_change_7d,
			market_cap: marketDataRow.quote.USD.market_cap,
			market_cap_dominance: marketDataRow.quote.USD.market_cap_dominance,
			cmc_rank: marketDataRow.cmc_rank,
			fully_diluted_market_cap: marketDataRow.quote.USD.fully_diluted_market_cap,
			total_supply: marketDataRow.total_supply,
			last_updated: marketDataRow.last_updated,
			date_added: marketDataRow.date_added,
		};
	});
	try {
		const insertResponse = await CryptoDetail.bulkCreate(parsedData);
		console.log(insertResponse);
	} catch (e) {
		console.log("Error::: ", e);
	}
};

insertCryptoDetailsIntoTable();
