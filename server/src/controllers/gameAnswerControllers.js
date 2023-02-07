const { where } = require('sequelize');
const {
  User, Point, Theme, Question,
} = require('../../db/models');

const putGameAnswer = async (req, res) => {
  const { idAns, reply, userId } = req.body;
  const user = await User.findOne({ where: { id: userId } });
  const Quest = await Question.findOne({ where: { id: idAns }, include: { model: Point } });
  // console.log(Quest);
  if (Quest.answer === reply) {
    // console.log('+++++++++++++++');
    await user.update({ allpoint: user.allpoint + Quest.Point.cost });
    // console.log(newUserPoins);

    res.send({ user: user.allpoint });
  } else {
    await user.update({ allpoint: user.allpoint - Quest.Point.cost });
    res.send({ user: user.allpoint });
  }
};

module.exports = { putGameAnswer };
