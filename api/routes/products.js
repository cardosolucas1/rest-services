module.exports = app => {
  const productsController = require('../controllers/products')

  app.route('/api/products')
    .get(productsController.getAllProducts)
    .post((req, res) => productsController.createProduct(req,res))

  app.route('/api/products/:id')
  .get(productsController.getProductById)
  .delete(productsController.deleteProduct)

  app.route('/api/product')
  .put(productsController.updateProduct)
}