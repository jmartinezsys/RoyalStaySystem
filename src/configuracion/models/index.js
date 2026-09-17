const { query, transaction } = require('../../../config/database');

exports.findAll = async () => {
  // TODO: Implementar SELECT * FROM configuracion
  return [];
};

exports.findById = async (id) => {
  // TODO: Implementar SELECT * FROM configuracion WHERE id = ?
  return null;
};

exports.create = async (data) => {
  // TODO: Implementar INSERT INTO configuracion
  return data;
};

exports.update = async (id, data) => {
  // TODO: Implementar UPDATE configuracion SET ? WHERE id = ?
  return { id, ...data };
};

exports.remove = async (id) => {
  // TODO: Implementar DELETE FROM configuracion WHERE id = ?
  return { id };
};
