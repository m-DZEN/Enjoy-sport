const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    static associate({ Food, DailyRecipe }) {
      this.belongsTo(Food, {
        foreignKey: 'food_id',
      });
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
