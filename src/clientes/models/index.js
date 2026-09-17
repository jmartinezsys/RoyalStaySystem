const { query, transaction } = require('../../../config/database');

exports.findAll = async () => {
  // TODO: Implementar SELECT * FROM clientes
  return [];
};

exports.findById = async (id) => {
  // TODO: Implementar SELECT * FROM clientes WHERE id = ?
  return null;
};

exports.create = async (data) => {
  // TODO: Implementar INSERT INTO clientes
  return data;
};

exports.update = async (id, data) => {
  // TODO: Implementar UPDATE clientes SET ? WHERE id = ?
  return { id, ...data };
};

exports.remove = async (id) => {
  // TODO: Implementar DELETE FROM clientes WHERE id = ?
  return { id };
};
