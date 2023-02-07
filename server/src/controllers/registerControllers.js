const bcrypt = require('bcrypt'); // !!! Поключаем "bcrypt" для хеширования пароля
const { User } = require('../../db/models');

const registerUser = async (req, res) => {
  // console.log('req.body ===>', req.body);
  try {
    const { login, password } = req.body;
    // console.log('===>', { login, password });
    const userData = await User.findOne({ where: { login } });
    if (userData) {
      console.log('===> NEED-NEW-LOGIN');
      res.json({ backendResult: 'NEED-NEW-LOGIN' });
    } else {
      // !!! Хеширование пароля перед записью в БД ('9' - кол-во циклов хеширования)
      const hashPassword = await bcrypt.hash(password, 9);
      const newUserData = await User.create({ login, password: hashPassword });
      req.session.user = { userLogin: newUserData.login, userId: newUserData.id };
      console.log('req.session.user ===>', req.session.user);

      // !!! Перед отправкой ответа на "фронт" необходимо дождаться записи файла
      // в "sessions" при помощи следующей конструкции:
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
