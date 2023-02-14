const { DailyList, DailyTrain, Training } = require('../../db/models');

const getDayTraining = async (req, res) => {
  const { user } = req.body;
  const { day } = req.params;
  try {
    const dayTrain = await DailyList.findAll({
      where: {
        user_id: user.userId,
        date: day,
      },
      include: [{
        model: DailyTrain,
        include: [{ model: Training }],
      }],
      raw: true,
    });
    const trainList = await Training.findAll({ raw: true });
    res.json([dayTrain, trainList]);
  } catch (error) {
    console.log(error);
  }
};

module.exports = getDayTraining;
