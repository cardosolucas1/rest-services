const { products } = require('../data/products.json');

const getAllProducts =  (_req, res) => {

  return res.status(200).json(products.data);
};

const getProductById = (req, res) => {
  const { id } = req.params
  return res.status(200).json(products.data.filter((p) => p.id === id))
}

const deleteProduct = (req, res) => {
  const { id } = req.params
  return res.status(200).json({
    deleted: true,
    product: products.data.filter((p) => p.id === id)
  })
}


const createProduct = (req, res) => {
  return res.status(201).json({
    created: true,
    createdAt: new Date(),
    name: req.body.name,
    id: 4
  })
}

const updateProduct = (req, res) => {
  const { id, name } = req.body
  return res.status(200).json({
    updated: true,
    oldInfo: products.data.filter((p) => p.id === id), 
    updatedInfo: {
      name
    }
  })
}

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};
