const {
  User, DailyTrain, DailyList, Training, DailyRecipe, Recipe,
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
  }
};

const deleteUser = async (req, res) => {
  try {
    console.log(req.body);
    const { id } = req.body;

    await DailyList.destroy({ where: { user_id: id } });
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
const delFood = async (req, res) => {
  try {
    const { x } = req.body;
    console.log('id food ======', x);
    await DailyList.destroy({ where: { id: x } });
    console.log('=> SUCCESS FOOD DELETED');
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

const addNutrition = async (req, res) => {
  try {
    const { inputs, user, day } = req.body;
    const newDailyRecipe = await DailyRecipe.create({
      recipe_id: Number(inputs.type_id),
      mass: Number(inputs.mass),
    });

    console.log('==============', newDailyRecipe);

    const newday = await DailyList.create(
      {
        user_id: Number(user.userId),
        dailyRecipe_id: newDailyRecipe.id,
        date: day,
      },
    );
    console.log('-----------------', newday);

    const dayFood = await DailyList.findAll({
      where: {
        user_id: user.userId,
        date: day,
      },
      include: [{
        model: DailyRecipe,
        include: [{ model: Recipe }],
      }],
      raw: true,
    });
    console.log('=====', dayFood);
    // res.send('ok');
    res.json(dayFood);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  setUserList,
  deleteUser,
  addTrain,
  delTrain,
  addNutrition,
  delFood,
};
