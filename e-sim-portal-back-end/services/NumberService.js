const pool = require('../db');

const getAvailableNumbers = async (type) => {
  let query = "SELECT * FROM numbers WHERE status = 'available' ";
  const params = [];

  if (type && type !== 'All') {
    query += "AND type = $1 ";
    params.push(type);
  }

  query += "ORDER BY id ASC";

  const result = await pool.query(query, params);
  return result.rows;
};

module.exports = {
  getAvailableNumbers,
  lockNumber: async (id) => {
    const query = "UPDATE numbers SET status = 'pending' WHERE id = $1 AND status = 'available' RETURNING *";
    const result = await pool.query(query, [id]);
    return result.rows[0];
  }
};