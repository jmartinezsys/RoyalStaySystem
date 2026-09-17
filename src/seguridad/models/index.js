const { query, transaction } = require('../../../config/database');

exports.findAll = async () => {
  // TODO: Implementar SELECT * FROM seguridad
  return [];
};

exports.findById = async (id) => {
  // TODO: Implementar SELECT * FROM seguridad WHERE id = ?
  return null;
};

exports.create = async (data) => {
  // TODO: Implementar INSERT INTO seguridad
  return data;
};

exports.update = async (id, data) => {
  // TODO: Implementar UPDATE seguridad SET ? WHERE id = ?
  return { id, ...data };
};

exports.remove = async (id) => {
  // TODO: Implementar DELETE FROM seguridad WHERE id = ?
  return { id };
};
