const { DailyList, DailyTrain, Training } = require('../../db/models');

const getDayTraining = async (req, res) => {
  const { user } = req.body;
  const { day } = req.params;
  // console.log('user=========>', user);
  // console.log('day=========>', day);

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
    // console.log('dayTrain', dayTrain);
    res.json(dayTrain);
  } catch (error) {
    console.log(error);
  }
};

module.exports = getDayTraining;
