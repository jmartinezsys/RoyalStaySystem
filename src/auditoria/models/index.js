const { query, transaction } = require('../../../config/database');

exports.findAll = async () => {
  // TODO: Implementar SELECT * FROM auditoria
  return [];
};

exports.findById = async (id) => {
  // TODO: Implementar SELECT * FROM auditoria WHERE id = ?
  return null;
};

exports.create = async (data) => {
  // TODO: Implementar INSERT INTO auditoria
  return data;
};

exports.update = async (id, data) => {
  // TODO: Implementar UPDATE auditoria SET ? WHERE id = ?
  return { id, ...data };
};

exports.remove = async (id) => {
  // TODO: Implementar DELETE FROM auditoria WHERE id = ?
  return { id };
};
