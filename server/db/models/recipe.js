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
    type_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Recipe',
  });
  return Recipe;
};
