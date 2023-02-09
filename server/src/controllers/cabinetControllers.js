const { User } = require('../../db/models');

const setUserData = async (req, res) => {
  const { user } = req.body;
  console.log('req.body ===>', req.body);
  try {
    const userData = await User.findAll({ where: { id: user.userId }, raw: true });
    console.log('userData----------cabContr>', userData);
    res.json(userData[0]);
  } catch (error) {
    console.log(error);
    // res.sendStatus(400);
  }
};

const createUserData = async (req, res) => {
  console.log('req.body ===>', req.session);
  const { inputs } = req.body;
  const { user } = req.body;
  console.log('---------->', user.userId);
  console.log('inputs---------->createUserData', inputs);

  try {
    const userData = await User.update({
      birthday: inputs.birthday,
      height: inputs.height,
      weight: inputs.weight,
      gender: inputs.gender,
      body_type: inputs.body_type,
      type_program: inputs.typeProgram,
      final_weight: inputs.final_weight,
      ready: inputs.ready,
      notready: inputs.notready,
      contra: inputs.contra,
    }, {
      where: { id: user.userId },
    });
    res.json(userData);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

module.exports = {
  setUserData,
  createUserData,
};
