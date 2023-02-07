const bcrypt = require('bcrypt'); // !!! Поключаем "bcrypt" для хеширования пароля
const { User } = require('../../db/models');

const loginUser = async (req, res) => {
  // console.log('req.body ===>', req.body);
  try {
    const { login, password } = req.body;
    // console.log('===>', { login, password });
    const userData = await User.findOne({ where: { login } });
    if (!userData) {
      console.log('===> BAD-LOGIN');
      res.json({ backendResult: 'BAD-LOGIN' });
    } else {
      const passCheck = await bcrypt.compare(password, userData.password); // !!! Сверка пароля с захешированным паролем в БД
      if (passCheck) {
        req.session.user = { userLogin: userData.login, userId: userData.id };
        console.log('req.session.user ===>', req.session.user);
        // !!! Перед отправкой ответа на "фронт" необходимо дождаться записи файла в "sessions" при помощи следующей конструкции:
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
