const express = require('express');

function createRouter(controller) {
  const router = express.Router();

  router.get('/', controller.index);
  router.get('/:id', controller.show);
  router.post('/', controller.store);
  router.put('/:id', controller.update);
  router.delete('/:id', controller.destroy);

  return router;
}

module.exports = { createRouter };
