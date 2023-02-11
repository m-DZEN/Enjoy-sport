const { User } = require('../../db/models');

const setUserList = async (req, res) => {
  try {
    const userList = await User.findAll({ raw: true });
    console.log('allUser for Admin List ==== >', userList);
    res.json(userList);
  } catch (error) {
    console.log(error);
    // res.sendStatus(400);
  }
};

module.exports = {
  setUserList,
};
