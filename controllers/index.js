const dataMapper = require('./dataMapper');

const controller = {
  homepage: async (req, res, next) => {
    try {
      const { rows } = await dataMapper.selectTodos();
      res.render('index', { todoList: rows });
    } catch (error) {
      console.log(error);
      next();
    }
  },

  addTodo: async (req, res, next) => {
    const { todo } = req.body;
    try {
      await dataMapper.insertTodo(todo);
      res.redirect('/');
    } catch (error) {
      console.log(error);
      next();
    }
  },

  deleteTodo: async (req, res, next) => {
    const id = req.params.id;
    try {
      await dataMapper.deleteTodo(id);
      res.redirect('/');
    } catch (error) {
      console.log(error);
      next();
    }
  },

  putTodo: async (req, res, next) => {
    try {
      await dataMapper.putTodo(req.body);
      const { rows } = await dataMapper.selectTodos();
      res.render('index', { todoList: rows });
    } catch (error) {
      console.log(error);
      next();
    }
  },
};

module.exports = controller;
