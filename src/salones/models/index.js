const { query, transaction } = require('../../../config/database');

exports.findAll = async () => {
  // TODO: Implementar SELECT * FROM salones
  return [];
};

exports.findById = async (id) => {
  // TODO: Implementar SELECT * FROM salones WHERE id = ?
  return null;
};

exports.create = async (data) => {
  // TODO: Implementar INSERT INTO salones
  return data;
};

exports.update = async (id, data) => {
  // TODO: Implementar UPDATE salones SET ? WHERE id = ?
  return { id, ...data };
};

exports.remove = async (id) => {
  // TODO: Implementar DELETE FROM salones WHERE id = ?
  return { id };
};
