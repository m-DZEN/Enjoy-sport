const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    static associate({ DailyRecipe }) {
      this.hasMany(DailyRecipe, {
        foreignKey: 'recipe_id',
      });
    }
  }
  Recipe.init({
    food_id: DataTypes.INTEGER,
    mass: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Recipe',
  });
  return Recipe;
};
