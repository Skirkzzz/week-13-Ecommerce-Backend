const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class ProductTag extends Model {}

ProductTag.init({
  productTag_Id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  product_Id: {
    type: DataTypes.INTEGER,
    references: {
      model: "Product",
      key: "id",
    },
    //references the product models id
  },
  tag_Id: {
    type: DataTypes.INTEGER,
    references: {
      model: "Tag",
      key: "id",
    },
    //references the Tag models id
  },
}),
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product_tag",
  };

module.exports = ProductTag;
