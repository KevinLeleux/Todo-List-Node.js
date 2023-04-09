const client = require('../config/database');

const dataMapper = {
  selectTodos: async () => {
    return await client.query('SELECT * FROM todo ORDER BY id ASC');
  },

  insertTodo: async (todo) => {
    await client.query('INSERT INTO todo (todo) VALUES ($1)', [todo]);
  },

  deleteTodo: async (id) => {
    await client.query('DELETE FROM todo WHERE id = $1', [id]);
  },

  putTodo: async (data) => {
    const { completed, id } = data;
    await client.query('UPDATE todo SET completed = $1 WHERE id = $2', [completed, id]);
  },
};

module.exports = dataMapper;
