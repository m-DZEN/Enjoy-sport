const { Parametr } = require('../../db/models');

const setUserStatistic = async (req, res) => {
  const { user } = req.body;
  try {
    const userData = await Parametr.findAll({
      limit: 1,
      where: { user_id: user.userId },
      order: [['createdAt', 'DESC']],
      raw: true,
    });
    res.json(userData[0]);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

const createUserStatistic = async (req, res) => {
  const { inputs } = req.body;
  const { user } = req.body;

  try {
    const userData = await Parametr.create({
      currentWeight: inputs.currentWeight,
      hipGirth: inputs.hipGirth,
      buttocksGirth: inputs.buttocksGirth,
      waistGirth: inputs.waistGirth,
      breastGirth: inputs.breastGirth,
      bicepsGirth: inputs.bicepsGirth,
      user_id: user.userId,
    });
    res.json(userData);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

module.exports = {
  setUserStatistic,
  createUserStatistic,
};
