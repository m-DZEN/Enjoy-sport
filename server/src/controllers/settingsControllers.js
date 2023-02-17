// const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

const setUserSettings = async (req, res) => {
  const { user } = req.body;
  // console.log('req.body', req.body);
  try {
    const userData = await User.findAll(
      {
        where: { id: user.userId },
        raw: true,
        attributes: ['login', 'email', 'name'],
      },
    );
    // console.log('userData---------->', userData);
    res.json(userData[0]);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

const createUserSettings = async (req, res) => {
  const { inputs } = req.body;
  const { user } = req.body;
  try {
    // const hashPassword = await bcrypt.hash(password, 9);
    const userData = await User.update({
      login: inputs.login,
      name: inputs.name,
      email: inputs.email,
      // password: inputs.password,
    }, {
      where: { id: user.userId },
    });
    // console.log('userData', userData);
    req.session.user.userName = inputs.name; // !!! ################
    res.json(userData);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

module.exports = {
  createUserSettings,
  setUserSettings,
};
