const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    static associate({ DailyRecipe, TypeFood }) {
      this.hasMany(DailyRecipe, {
        foreignKey: 'recipe_id',
      });
      this.belongsTo(TypeFood, {
        foreignKey: 'type_id',
      });
    }
  }
  Recipe.init({
    type_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Recipe',
  });
  return Recipe;
};
