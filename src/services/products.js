const products = require('../models/products');

module.exports.create = async (product) => {
   if (!product) {
      throw new Error('Missing product');
   }

   await products.create(product);
};

module.exports.findByName = async (name) => {
   return products.find({name: new RegExp(name, 'i')}).exec();
}