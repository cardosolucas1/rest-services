module.exports = () => {
  const productsDB = require('../data/products.json');
  const controller = {};

  controller.products = (_req, res) => res.status(200).json(productsDB.products);

  return controller;
}