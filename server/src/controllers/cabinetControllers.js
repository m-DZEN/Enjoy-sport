const { User } = require('../../db/models');

// const userData = async (res, req) => {

// };

const createUserData = async (req, res) => {
  // console.log('req.body ===>', req.body);
  const { inputs } = req.body;
  const { user } = req.body;
  // console.log('---------->', user.userId);
  // console.log('inputs---------->', inputs);

  try {
    const userData = await User.update({
      birthday: inputs.birthday,
      height: inputs.height,
      weight: inputs.weight,
      gender: inputs.gender,
      body_type: inputs.bodyType,
      type_program: inputs.typeProgram,
      final_weight: inputs.finishWeight,
      ready: inputs.ready,
      notready: inputs.notReady,
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
  // userData,
  createUserData,
};
