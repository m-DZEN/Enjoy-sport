const { Parametr } = require('../../db/models');

const setUserStatistic = async (req, res) => {
  const { user } = req.body;
  try {
    const userData = await Parametr.findAll({
      // limit: 1,
      where: { user_id: user.userId },
      order: [['createdAt', 'DESC']],
      raw: true,
    });
    console.log('++++++++++', userData);
    res.json(userData);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

const createUserStatistic = async (req, res) => {
  const { inputs } = req.body;
  const { user } = req.body;
  // console.log('------------>user', user);
  // console.log('------------>inputs', inputs);

  try {
    const creationDate = await Parametr.findOne({
      where: { user_id: user.userId },
      attributes: ['data'],
      raw: true,
    });
    // console.log('------------>creationDate', creationDate.data);
    const today = (new Date()).toISOString().slice(0, 10);
    // console.log('------------>today', today);

    if (creationDate.data !== today) {
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
    } else {
      const userData = await Parametr.update(
        {
          currentWeight: inputs.currentWeight,
          hipGirth: inputs.hipGirth,
          buttocksGirth: inputs.buttocksGirth,
          waistGirth: inputs.waistGirth,
          breastGirth: inputs.breastGirth,
          bicepsGirth: inputs.bicepsGirth,
        },
        { where: { user_id: user.userId } },
      );
      res.json(userData);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

module.exports = {
  setUserStatistic,
  createUserStatistic,
};
