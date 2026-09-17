const { createController } = require('../crud');
const service = require('../services');

module.exports = createController(service);
