const sequelize = require('sequelize');
const CryptoDetail = require("../models/cryptoDetails");
const Op = sequelize.Op;

const getFindOptions = ({ pageNumber = 1,
  perPage = 100,
  sortColumn = 'name',
  sortOrder = 'ASC',
  searchQuery = "" }) => {
  if (searchQuery) {
    return {
      where: {
        [Op.or]: {
          symbol: { [Op.iLike]: '%' + searchQuery + '%' },
          name: { [Op.iLike]: '%' + searchQuery + '%' },
        }
      },
      offset: pageNumber,
      limit: perPage,
      order: [
        [sortColumn, sortOrder],
      ]
    }
  }
  return {
    offset: pageNumber,
    limit: perPage,
    order: [
      [sortColumn, sortOrder],
    ]
  }
}

const index = async (req, res) => {
  const {
    pageNumber,
    perPage,
    sortColumn,
    sortOrder,
    searchQuery
  } = req.query;

  try {
    const { count, rows: details } = await CryptoDetail.findAndCountAll(getFindOptions(req.query));

    return res.status(200).json({
      details: details,
      perPage: perPage,
      pageNumber: pageNumber,
      total: count
    });
  } catch (e) {
    console.log("Error while fetching crypto details");
    return res.status(500).json({ error: e.message });
  }
};

module.exports = {
  index
};
