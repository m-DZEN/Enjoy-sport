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

    const statisticData = result.map((elem) => elem.get())
      .map((el) => ({
        data: el.data,
        currentWeight: el.currentWeight / 1000,
        hipGirth: el.hipGirth / 10,
        buttocksGirth: el.buttocksGirth / 10,
        waistGirth: el.waistGirth / 10,
        breastGirth: el.breastGirth / 10,
        bicepsGirth: el.bicepsGirth / 10,
      }));

    console.log('===> STATISTIC-OK', statisticData);

    setTimeout(() => {
      res.json({ backendResult: 'STATISTIC-OK', statisticData });
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

  const currentWeight = Math.round(statisticFormInputs.currentWeight * 1000);
  const hipGirth = Math.round(statisticFormInputs.hipGirth * 10);
  const buttocksGirth = Math.round(statisticFormInputs.buttocksGirth * 10);
  const waistGirth = Math.round(statisticFormInputs.waistGirth * 10);
  const breastGirth = Math.round(statisticFormInputs.breastGirth * 10);
  const bicepsGirth = Math.round(statisticFormInputs.bicepsGirth * 10);

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
