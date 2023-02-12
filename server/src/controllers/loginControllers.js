const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

const loginUser = async (req, res) => {
  // console.log('req.body ===>', req.body);
  try {
    const login = req.body.userLogin;
    const password = req.body.userPassword;
    // console.log('===>', { login, password });
    const userData = await User.findOne({ where: { login } });
    if (!userData) {
      console.log('===> BAD-LOGIN');
      res.json({ backendResult: 'BAD-LOGIN' });
    } else {
      const passCheck = await bcrypt.compare(password, userData.password);
      if (passCheck) {
        req.session.user = { userLogin: userData.login, userId: userData.id };
        console.log('req.session.user ===>', req.session.user);
        req.session.save(() => {
          console.log('===> LOGIN-OK');
          res.json({ backendResult: 'LOGIN-OK', userInfo: req.session.user });
        });
      } else {
        console.log('===> BAD-PASSWORD');
        res.json({ backendResult: 'BAD-PASSWORD' });
      }
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

module.exports = { loginUser };
