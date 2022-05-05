# Crypto Dashboard

## File Structure

```
  /
  |-- config
  |-- controllers
  |-- data-migrations
  |-- migrations
  |-- models
  |-- routes
  |-- utils
  | .env.example
  | index.js
  | package.json
  | README.md
```

## Instructions:

1. Install dependencies:

	> npm install


2. Copy .env.example to .env and update the values:
   
   > cp .env.example .env
	
		Update values for database name, database username, password, host and port 


3. Run Migration to Create Table:

	> node migrations/createCryptoDashboardTable.js


4. Run Data migration script:

	> node data-migrations/populateCoins.js


5. Start server:

	> npm start



## APIs:

1. List all data inserted into DB

> /api/index

### Parameters: 

searchQuery: `string` \
sortColumn: `string` \
sortOrder: `string` \
perPage: `number` \
pageNumber: `number` 
 
### Response Body:

```
{
  "details": [
    {
      "id": 747,
      "coinId": 2882,
      "name": "0Chain",
      "symbol": "ZCN",
      "slug": "0chain",
      "circulating_supply": 48400982,
      "max_supply": 400000000,
      "price_usd": 0.3872614368834401,
      "volume_24hr": 102419.0828957,
      "percentage_change_24h": -3.12642966,
      "percentage_change_7d": -4.66834572,
      "market_cap": 18743833.835889522,
      "cmc_rank": 747,
      "total_supply": 200000000,
      "volume_change_24hr": 7.4997,
      "percentage_change_1h": -0.62487578,
      "market_cap_dominance": 0.0011,
      "fully_diluted_market_cap": 154904574.75,
      "createdAt": "2022-05-04T17:27:42.141Z",
      "updatedAt": "2022-05-04T17:27:42.141Z"
    },
    {
      "id": 1022,
      "coinId": 1037,
      "name": "Agoras: Currency of Tau",
      "symbol": "AGRS",
      "slug": "agoras-tokens",
      "circulating_supply": 18000000,
      "max_supply": 42000000,
      "price_usd": 0.38170129187848617,
      "volume_24hr": 4250.42161675,
      "percentage_change_24h": 5.36969438,
      "percentage_change_7d": -2.65792766,
      "market_cap": 6870623.253812751,
      "cmc_rank": 1022,
      "total_supply": 42000000,
      "volume_change_24hr": 50.2591,
      "percentage_change_1h": -0.42932608,
      "market_cap_dominance": 0,
      "fully_diluted_market_cap": 16031454.26,
      "createdAt": "2022-05-04T17:27:42.141Z",
      "updatedAt": "2022-05-04T17:27:42.141Z"
    },
    {
      "id": 2267,
      "coinId": 1949,
      "name": "Agrello",
      "symbol": "DLT",
      "slug": "agrello-delta",
      "circulating_supply": 129071019.035721,
      "max_supply": null,
      "price_usd": 0.0012288865174441028,
      "volume_24hr": 0,
      "percentage_change_24h": 0.77630703,
      "percentage_change_7d": -37.02498363,
      "market_cap": 158613.63508576868,
      "cmc_rank": 2267,
      "total_supply": 130271020.035721,
      "volume_change_24hr": 0,
      "percentage_change_1h": -0.62498843,
      "market_cap_dominance": 0,
      "fully_diluted_market_cap": 160088.3,
      "createdAt": "2022-05-04T17:27:42.141Z",
      "updatedAt": "2022-05-04T17:27:42.141Z"
    }
	],
"total": 5000
}
```