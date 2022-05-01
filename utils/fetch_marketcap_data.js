/* Example in Node.js */
const axios = require('axios');

let response = null;
const URI = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";

const fetchDetailsFromCoinmarketAPI = async() => { 
  try { 
    response = await axios.get(URI, {
      headers: {
        'X-CMC_PRO_API_KEY': 'ab7d577c-28bf-4739-bc5a-1a798be7ba58',
      },
    });
    return response.data;
  } catch(e) {
    console.log("Error while getting data from coinmarketcap");
    throw(e)
  }
}

module.exports = { 
  fetchDetailsFromCoinmarketAPI
}

