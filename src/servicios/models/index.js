const { query, transaction } = require('../../../config/database');

exports.findAll = async () => {
  // TODO: Implementar SELECT * FROM servicios
  return [];
};

exports.findById = async (id) => {
  // TODO: Implementar SELECT * FROM servicios WHERE id = ?
  return null;
};

exports.create = async (data) => {
  // TODO: Implementar INSERT INTO servicios
  return data;
};

exports.update = async (id, data) => {
  // TODO: Implementar UPDATE servicios SET ? WHERE id = ?
  return { id, ...data };
};

exports.remove = async (id) => {
  // TODO: Implementar DELETE FROM servicios WHERE id = ?
  return { id };
};
