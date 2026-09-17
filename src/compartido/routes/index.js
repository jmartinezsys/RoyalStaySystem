const { createRouter } = require('../crud');
const controller = require('../controllers');

module.exports = createRouter(controller);
