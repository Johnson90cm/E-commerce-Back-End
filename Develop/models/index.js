// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'product_id'
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Category, {
  through: ProductTag,
  as: '',
  foreignKey: ''
});

// Tags belongToMany Products (through ProductTag)
Tags.belongsToMany(Products, {
  through: ProductTag,
  as: '',
  foreignKey: ''
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
