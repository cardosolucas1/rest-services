module.exports = app => {
  const controller = require('../controllers/products')();

  app.route('/api/products')
    .get(controller.products);
}