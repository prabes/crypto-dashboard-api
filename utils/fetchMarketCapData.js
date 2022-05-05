
const axios = require('axios');
const URI = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=5000";

const fetchDetailsFromCoinmarketAPI = async() => {
  try {
    const response = await axios.get(URI, {
      headers: {
        'X-CMC_PRO_API_KEY': 'ab7d577c-28bf-4739-bc5a-1a798be7ba58',
      },
    });
    return response;
  } catch(e) {
    console.log("Error while getting data from coinmarketcap");
  }
};

fetchDetailsFromCoinmarketAPI();

module.exports = {
  fetchDetailsFromCoinmarketAPI
};

