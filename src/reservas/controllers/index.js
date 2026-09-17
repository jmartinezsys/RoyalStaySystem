const { createController } = require('../../compartido/crud');
const service = require('../services');

module.exports = createController(service);
