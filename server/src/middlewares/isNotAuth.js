const isNotAuth = (req, res, next) => {
  if (!req.session?.user) {
    next();
  } else {
    console.log('=== isNotAuth middleware worked ===');
    res.sendStatus(400);
  }
};

module.exports = { isNotAuth };
