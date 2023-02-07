const checkUserId = (req, res, next) => {
  // console.log('===>', { 'req.params': req.params });
  if (+req.params.userId !== req.session?.userId) {
    console.log('=== checkUserId middleware worked ===');
    res.sendStatus(400);
  } else {
    next();
  }
};

module.exports = { checkUserId };
