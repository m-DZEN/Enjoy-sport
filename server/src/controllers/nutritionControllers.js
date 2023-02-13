const {
  DailyList, DailyRecipe, Recipe, TypeFood,
} = require('../../db/models');

const getNutrition = async (req, res) => {
  const { user } = req.body;
  const { day } = req.params;
  console.log('user=========>', user);
  console.log('day=========>', day);

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
    console.log('daylyFood', daylyFood);
    res.json(daylyFood);
  } catch (error) {
    console.log(error);
  }
};

module.exports = getNutrition;
