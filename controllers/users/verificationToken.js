const { users: services } = require('../../services');
require('dotenv').config();

const verificationToken = async (req, res, next) => {
  const { verificationToken } = req.params;
  const { FRONTEND_URL } = process.env;

  try {
    const user = await services.findUser({ verifyToken: verificationToken });

    if (!user) {
      return res.status(404).json({
        status: 'error',
        code: 404,
        message: 'Not found',
      });
    }

    if (user.verify) {
      return res.status(400).json({
        status: 'error',
        code: 400,
        message: 'Verification has already been passed',
      });
    }

    await services.findByIdAndUpdate(user._id, {
      verify: true,
      verifyToken: null,
    });

    // res.json({
    //   status: 'success',
    //   code: 200,
    //   message: 'Verification successful',
    // });

    return res.redirect(`${FRONTEND_URL}/login?email=${user.email}`); //редиректим на фронтенд и вставляем имэйл
  } catch (error) {
    next(error);
  }
};

module.exports = verificationToken;
