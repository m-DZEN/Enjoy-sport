const logoutUser = async (req, res) => {
  try {
    req.session.destroy(() => {
      res.clearCookie('myCookie');
      console.log('===> LOGOUT-OK');
      res.json({ backendResult: 'LOGOUT-OK' });
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

module.exports = { logoutUser };
