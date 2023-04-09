const express = require('express');
const router = express.Router();
const controller = require('../controllers');

router.get('/', controller.homepage);

router.post('/', controller.addTodo);

router.get('/delete/:id', controller.deleteTodo);

router.use((req, res) => {
  res.status(404).render('404');
});

module.exports = router;
