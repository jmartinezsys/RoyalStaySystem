const { query } = require('../../../config/database');

exports.findAll = async () => {
  return [];
};

exports.findById = async (id) => {
  return null;
};

exports.create = async (data) => {
  return data;
};

exports.update = async (id, data) => {
  return { id, ...data };
};

exports.remove = async (id) => {
  return { id };
};
