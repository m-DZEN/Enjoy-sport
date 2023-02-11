const { User } = require('../../db/models');

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
    res.sent(400);
    console.log(error);
  }
};

module.exports = {
  setUserList,
  deleteUser,
};
