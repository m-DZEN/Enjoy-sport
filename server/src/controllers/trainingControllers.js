const { DailyList } = require('../../db/models');

const getDayTraining = async (req, res) => {
  const { user } = req.body;
  const { day } = req.params;
  console.log('user=========>', user);
  console.log('day=========>', day);

  try {
    const dayTrain = await DailyList.findAll({
      where: {
        user_id: user.userId,
        // data: day,
      },
    });
    console.log('dayTrain', dayTrain);
    res.send('ok');
  } catch (error) {
    console.log(error);
  }
};

module.exports = getDayTraining;
