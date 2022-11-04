const { Model, Datatypes, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

Jokes.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    jokes: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "jokes",
  }
);

module.exports = Jokes;
