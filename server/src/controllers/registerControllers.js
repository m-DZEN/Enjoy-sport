const bcrypt = require('bcrypt');
const { User, Parametr } = require('../../db/models');

const registerUser = async (req, res) => {
  // console.log('req.body ===>', req.body);
  try {
    const login = req.body.userLogin;
    const email = req.body.userEmail;
    const password = req.body.userPassword;
    // console.log('===>', { login, email, password });
    const checkLogin = await User.findOne({ where: { login } });
    const checkEmail = await User.findOne({ where: { email } });
    if (checkLogin) {
      console.log('===> NEED-NEW-LOGIN');
      res.json({ backendResult: 'NEED-NEW-LOGIN' });
    } else if (checkEmail) {
      console.log('===> NEED-NEW-EMAIL');
      res.json({ backendResult: 'NEED-NEW-EMAIL' });
    } else {
      const hashPassword = await bcrypt.hash(password, 9);
      const newUserData = await User.create({ login, email, password: hashPassword });
      const today = (new Date()).toISOString().slice(0, 10);
      await Parametr.create({
        data: today,
        user_id: newUserData.id,
      });
      req.session.user = { userLogin: newUserData.login, userId: newUserData.id };
      console.log('req.session.user ===>', req.session.user);
      req.session.save(() => {
        console.log('===> REGISTER-OK');
        res.json({ backendResult: 'REGISTER-OK', userInfo: req.session.user });
      });
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

module.exports = { registerUser };
