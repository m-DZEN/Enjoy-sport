// const { Recipe } = require('../../db/models');

const getRecipe = async (req, res) => {
  const { user } = req.body;
  const { day } = req.params;

  console.log('user, day', user, day);
  // try {

  // } catch (error) {
  //   console.log(error);
  // }
};
module.exports = getRecipe;
