const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');
const routes = require('./routes');
const { errorHandler, notFound } = require('./middleware/errorHandler');

dotenv.config();

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan(process.env.LOG_LEVEL || 'dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
