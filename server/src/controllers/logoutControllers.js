const logoutUser = async (req, res) => {
  try {
    // !!! Перед уничтожениеием "куки" и "редиректом" необходимо дождаться удаления файла из "sessions" при помощи следующей конструкции:
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
