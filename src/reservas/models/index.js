const { query, transaction } = require('../../../config/database');

exports.findAll = async () => {
  // TODO: Implementar SELECT * FROM reservas
  return [];
};

exports.findById = async (id) => {
  // TODO: Implementar SELECT * FROM reservas WHERE id = ?
  return null;
};

exports.create = async (data) => {
  // TODO: Implementar INSERT INTO reservas
  return data;
};

exports.update = async (id, data) => {
  // TODO: Implementar UPDATE reservas SET ? WHERE id = ?
  return { id, ...data };
};

exports.remove = async (id) => {
  // TODO: Implementar DELETE FROM reservas WHERE id = ?
  return { id };
};
