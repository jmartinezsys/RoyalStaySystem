const { createRouter } = require('../../compartido/crud');
const controller = require('../controllers');

module.exports = createRouter(controller);
