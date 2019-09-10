const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const logger = require('morgan');

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(logger('dev'));

app.get('/', (req, res) =>
  res.status(200).json({
    status: 200,
    message: 'Server up and about!!!',
  }),
);

app.get((req, res) =>
  res.status(401).json({
    status: 401,
    message: 'Bad URL.',
  }),
);

module.exports = app;
