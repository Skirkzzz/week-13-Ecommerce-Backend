const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Category extends Model {}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
),
  Product.init ( {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      //validates that data is a decimal??
    },
    stock: {
      type: DataTypes.INTEGER,
      typeof i === 'number'
      allowNull: false,
      defaultValue: 10
      // set a default value as 10
      //validates that the value is numeric
    },
    category_Id: {
      type: DataTypes.INTEGER,
      references: {
      model: 'Category',
      key: 'id'
      }
      //references category models id
    },
  },
  ),
    Tag.init( {
    
      tag_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING,
    },
    productTag_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

  }
    ProductTag.init( {

    tag_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_Id: {
      type: DataTypes.INTEGER,
      references: {
      model: 'Product',
      key: 'id'}
      //references the product models id
    },
    tag_Id: {
      type: DataTypes.INTEGER,
      references: {
      model: 'Tag',
      key: 'id'
      }
      //references the Tag models id
    },
  },
    ),
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "category",
  }
);

module.exports = Category;

/*you'll need to execute association methods on your Sequelize models to create the following relationships between them:

* `Product` belongs to `Category`, and `Category` has many `Product` models, as a category can have multiple products but a product can only belong to one category.

* `Product` belongs to many `Tag` models, and `Tag` belongs to many `Product` models. Allow products to have multiple tags and tags to have many products by using the `ProductTag` through model.

> **Hint:** Make sure you set up foreign key relationships that match the column we created in the respective models.

