const { Parametr } = require('../../db/models');

const getUserStatistic = async (req, res) => {
  console.log('req.params ===>', req.params);
  const userId = +req.params.userId;
  try {
    const result = await Parametr.findAll({
      where: { user_id: userId },
      attributes: [
        'data',
        'currentWeight',
        'hipGirth',
        'buttocksGirth',
        'waistGirth',
        'breastGirth',
        'bicepsGirth',
      ],
    });
    console.log('===> STATISTIC-OK', result.map((el) => el.get()));
    setTimeout(() => {
      res.json({ backendResult: 'STATISTIC-OK', statisticData: result });
    }, 2000);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

const editUserStatistic = async (req, res) => {
  // console.log('req.body ===>', req.body);
  const { userId, actualDate, statisticFormInputs } = req.body;
  console.log('===>', { userId, actualDate, statisticFormInputs });

  const {
    currentWeight,
    hipGirth,
    buttocksGirth,
    waistGirth,
    breastGirth,
    bicepsGirth,
  } = statisticFormInputs;

  try {
    const result = await Parametr.findOrCreate({
      where: { user_id: userId, data: actualDate },
      defaults: {
        currentWeight,
        hipGirth,
        buttocksGirth,
        waistGirth,
        breastGirth,
        bicepsGirth,
      },
    });

    console.log('isCreate ===>', result[1]);

    if (result[1]) {
      console.log('===> STATISTIC-CREATE-OK');
      res.json({ backendResult: 'STATISTIC-CREATE-OK' });
    } else {
      const data = result[0];
      await data.update({
        currentWeight,
        hipGirth,
        buttocksGirth,
        waistGirth,
        breastGirth,
        bicepsGirth,
      });
      await data.save();
      console.log('===> STATISTIC-UPDATE-OK');
      res.json({ backendResult: 'STATISTIC-UPDATE-OK' });
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

module.exports = {
  getUserStatistic,
  editUserStatistic,
};
