const { createService } = require('../../compartido/crud');
const model = require('../models');

module.exports = createService(model);
