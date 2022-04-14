const verify = (message) => {
  if (message === '"password" length must be at least 6 characters long') {
    return true;
  }
  return false;
};

const errorMdw = (err, req, res, _next) => {
  if (err.isJoi) {
    if (verify(err.details[0].message)) {
      return res.status(400).json({
        message: '"password" length must be 6 characters long',
      });
    }
    return res.status(400).json({
      message: err.details[0].message,
    });
  }
  return res.status(400).json({
    message: 'Invalid fields',
  });
};

module.exports = errorMdw;
