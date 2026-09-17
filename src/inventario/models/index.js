const { query, transaction } = require('../../../config/database');

exports.findAll = async () => {
  // TODO: Implementar SELECT * FROM inventario
  return [];
};

exports.findById = async (id) => {
  // TODO: Implementar SELECT * FROM inventario WHERE id = ?
  return null;
};

exports.create = async (data) => {
  // TODO: Implementar INSERT INTO inventario
  return data;
};

exports.update = async (id, data) => {
  // TODO: Implementar UPDATE inventario SET ? WHERE id = ?
  return { id, ...data };
};

exports.remove = async (id) => {
  // TODO: Implementar DELETE FROM inventario WHERE id = ?
  return { id };
};
