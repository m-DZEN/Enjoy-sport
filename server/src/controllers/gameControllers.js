const {
  User, Point, Theme, Question,
} = require('../../db/models');

const getGameField = async (req, res) => {
  const allUser = await User.findAll();
  const allPoint = await Point.findAll();
  const allTheme = await Theme.findAll();
  const allQuest = await Question.findAll({ include: [{ model: Point }, { model: Theme }] });
  console.log('=> ВСЕ ТЕМЫ');
  res.json({
    allQuest, allTheme, allPoint, allUser,
  });
};

module.exports = { getGameField };
