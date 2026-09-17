function createService(model) {
  return {
    findAll: () => model.findAll(),
    findById: (id) => model.findById(id),
    create: (data) => model.create(data),
    update: (id, data) => model.update(id, data),
    remove: (id) => model.remove(id),
  };
}

module.exports = { createService };
