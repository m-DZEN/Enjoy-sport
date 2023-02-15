const {
  DailyList, DailyRecipe, Recipe, TypeFood,
} = require('../../db/models');

const getNutrition = async (req, res) => {
  const { user } = req.body;
  const { day } = req.params;
  try {
    const daylyFood = await DailyList.findAll({
      where: {
        user_id: user.userId,
        date: day,
      },
      include: [{
        model: DailyRecipe,
        include: [{
          model: Recipe,
          include: [{
            model: TypeFood,
          }],
        }],
      }],
      raw: true,
    });
    const foodList = await Recipe.findAll({ raw: true });
    console.log('daylyFood================', daylyFood);
    res.json([daylyFood, foodList]);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getNutrition };
