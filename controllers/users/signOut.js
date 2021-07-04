const signOut = (_, res, __) => {
  res.clearCookie('jwToken');

  res.status(204).json({
    status: 'success',
    code: 204,
  });
};

module.exports = signOut;
