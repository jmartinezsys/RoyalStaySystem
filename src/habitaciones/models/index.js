const { query, transaction } = require('../../../config/database');

exports.findAll = async () => {
  // TODO: Implementar SELECT * FROM habitaciones
  return [];
};

exports.findById = async (id) => {
  // TODO: Implementar SELECT * FROM habitaciones WHERE id = ?
  return null;
};

exports.create = async (data) => {
  // TODO: Implementar INSERT INTO habitaciones
  return data;
};

exports.update = async (id, data) => {
  // TODO: Implementar UPDATE habitaciones SET ? WHERE id = ?
  return { id, ...data };
};

exports.remove = async (id) => {
  // TODO: Implementar DELETE FROM habitaciones WHERE id = ?
  return { id };
};
