// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.hasOne(Category, {
  foreignKey: 'product_id',
  onDelete: 'CASCADE',
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
});
// Products belongToMany Tags (through ProductTag)
Product.hasMany(ProductsTag, {
  foreignKey: 'product_id',
  onDelete: 'CASCADE',
});
// Tags belongToMany Products (through ProductTag)
Tags.belongToMany(ProductsTag, {  
  foreignKey: 'Tag_id',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

/*
* `Product` belongs to `Category`, and `Category` has many `Product` models, as a category can have multiple products but a product can only belong to one category.

* `Product` belongs to many `Tag` models, and `Tag` belongs to many `Product` models. Products have multiple tags and tags have many products by using the `ProductTag` through model.


