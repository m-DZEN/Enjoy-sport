const isAuth = (req, res, next) => {
  if (req.session?.user) {
    next();
  } else {
    console.log('=== isAuth middleware worked ===');
    res.sendStatus(400);
  }
};

module.exports = { isAuth };
