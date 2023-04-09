const client = require('../config/database');

const dataMapper = {
  selectTodos: async () => {
    return await client.query('SELECT * FROM todo');
  },

  insertTodo: async (todo) => {
    await client.query('INSERT INTO todo (todo) VALUES ($1)', [todo]);
  },

  deleteTodo: async (id) => {
    await client.query('DELETE FROM todo WHERE id = $1', [id]);
  },
};

module.exports = dataMapper;
