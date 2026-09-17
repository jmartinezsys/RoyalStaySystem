const { query, transaction } = require('../../../config/database');

exports.findAll = async () => {
  // TODO: Implementar SELECT * FROM facturacion
  return [];
};

exports.findById = async (id) => {
  // TODO: Implementar SELECT * FROM facturacion WHERE id = ?
  return null;
};

exports.create = async (data) => {
  // TODO: Implementar INSERT INTO facturacion
  return data;
};

exports.update = async (id, data) => {
  // TODO: Implementar UPDATE facturacion SET ? WHERE id = ?
  return { id, ...data };
};

exports.remove = async (id) => {
  // TODO: Implementar DELETE FROM facturacion WHERE id = ?
  return { id };
};
