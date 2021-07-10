require('dotenv').config();
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const createMail = (address, verifyToken) => {
  const mail = {
    to: address,
    from: 'tests.app@ukr.net',
    subject: 'Подтверждение регистрации',
    html: `
      <h1>Вы зарегистрировались!</h1>
      <p>Чтобы подтвердить, перейдите по ссылке &#9759;</p>
      <br/>
      <a href='http://localhost:3000/api/users/verify/${verifyToken}' alt="tests-api">http://tests-app.netlify.app/api/users/verify/${verifyToken}</a>
    `,
  };

  return mail;
};

module.exports = createMail;
