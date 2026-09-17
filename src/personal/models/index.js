const { query, transaction } = require('../../../config/database');

exports.findAll = async () => {
  // TODO: Implementar SELECT * FROM personal
  return [];
};

exports.findById = async (id) => {
  // TODO: Implementar SELECT * FROM personal WHERE id = ?
  return null;
};

exports.create = async (data) => {
  // TODO: Implementar INSERT INTO personal
  return data;
};

exports.update = async (id, data) => {
  // TODO: Implementar UPDATE personal SET ? WHERE id = ?
  return { id, ...data };
};

exports.remove = async (id) => {
  // TODO: Implementar DELETE FROM personal WHERE id = ?
  return { id };
};
