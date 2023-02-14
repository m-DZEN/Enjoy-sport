const getUserInfo = (req, res) => {
  console.log('req.session.user ===>', req.session.user);
  setTimeout(() => {
    if (req.session.user) {
      console.log('===> SESSION-OK');
      res.json({ backendResult: 'SESSION-OK', userInfo: req.session.user });
    } else {
      console.log('===> NEED-LOGIN');
      res.json({ backendResult: 'NEED-LOGIN' });
    }
  }, 2500);
};

module.exports = { getUserInfo };
