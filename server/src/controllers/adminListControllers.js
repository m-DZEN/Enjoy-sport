const {
  User, DailyTrain, DailyList, Training,
} = require('../../db/models');

const setUserList = async (req, res) => {
  try {
    const userList = await User.findAll({ raw: true });

    const list = userList
      .map((el) => ({ id: el.id, name: el.name, login: el.login }))
      .filter((el) => (el.id !== 1));

    console.log('allUser for Admin List ==== >', list);
    res.json(list);
  } catch (error) {
    console.log(error);
    // res.sendStatus(400);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.body;
    await User.destroy({ where: { id } });
    console.log('=> SUCCESS USER DELETED');
    res.end();
  } catch (error) {
    res.send(400);
    console.log(error);
  }
};

const delTrain = async (req, res) => {
  try {
    const { x } = req.body;
    console.log('id train ======', x);
    await DailyList.destroy({ where: { id: x } });
    console.log('=> SUCCESS TRAIN DELETED');
    res.end();
  } catch (error) {
    res.send(400);
    console.log(error);
  }
};

const addTrain = async (req, res) => {
  try {
    const { inputs, user, day } = req.body;
    console.log('==============', day, inputs, user);
    const newTrain = await DailyTrain.create({
      training_id: Number(inputs.training_id),
      weight: Number(inputs.weight),
      sets: Number(inputs.sets),
      rep: Number(inputs.rep),
      rest: Number(inputs.rest),
    });
    console.log('++++++', newTrain);
    const newday = await DailyList.create(
      {
        user_id: Number(user.userId),
        dailyTrain_id: newTrain.id,
        date: day,
      },
    );
    console.log('-------', newday);

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
    console.log('=====', dayTrain);
    res.json(dayTrain);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  setUserList,
  deleteUser,
  addTrain,
  delTrain,
};
