const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Category extends Model {}

Category.init(
  {
    category_id: {
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
    product_id: {
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

    productTag_Id: {
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

module.exports = Category, Product, Tag, ProductTag;



