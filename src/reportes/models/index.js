const { query, transaction } = require('../../../config/database');

exports.findAll = async () => {
  // TODO: Implementar SELECT * FROM reportes
  return [];
};

exports.findById = async (id) => {
  // TODO: Implementar SELECT * FROM reportes WHERE id = ?
  return null;
};

exports.create = async (data) => {
  // TODO: Implementar INSERT INTO reportes
  return data;
};

exports.update = async (id, data) => {
  // TODO: Implementar UPDATE reportes SET ? WHERE id = ?
  return { id, ...data };
};

exports.remove = async (id) => {
  // TODO: Implementar DELETE FROM reportes WHERE id = ?
  return { id };
};
