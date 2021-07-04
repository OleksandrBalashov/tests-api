const getCurrent = (req, res, next) => {
  const { email, subscription } = req.user;

  res.json({
    status: 'success',
    code: 200,
    data: {
      user: {
        email,
      },
    },
  });
};

module.exports = getCurrent;
