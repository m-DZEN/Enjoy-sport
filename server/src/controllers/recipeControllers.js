const { Recipe } = require('../../db/models');

const getRecipe = async (req, res) => {
  const { id } = req.params;
  console.log('id-------------->', id);
  try {
    const recipe = await Recipe.findOne({ where: { id }, raw: true });
    console.log('recipe====>', recipe);
    res.json(recipe);
  } catch (error) {
    console.log(error);
  }
};
module.exports = getRecipe;
