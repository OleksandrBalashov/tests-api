const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
require('dotenv').config();
// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger.json');
const { users: usersRouters } = require('./routes/api');

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use('/api/users', usersRouters);
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((_, res) => {
  res.status(404).json({
    status: 'error',
    code: 404,
    message: 'Not found',
  });
});

app.use((error, _, res, __) => {
  const { code = 500, message = 'Server error' } = error;

  res.status(code).json({
    status: 'fail',
    code,
    message,
  });
});

const { DB_HOST, PORT } = process.env;

mongoose
  .connect(DB_HOST, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    const port = PORT || 3001;
    app.listen(port);
    console.log('Server is running...');
  })
  .catch(error => {
    console.log(error);
  });
