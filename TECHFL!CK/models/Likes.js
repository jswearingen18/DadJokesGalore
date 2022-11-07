const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Likes extends Model {}

Likes.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    jokes_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "jokes",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "likes",
  }
);

module.exports = Likes;
