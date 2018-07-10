const db = require('../database-mysql/models');

module.exports = {
  fetch: (req, res) => {
    // http://localhost:3000/api/todolist/?listName=To+Do+List
    const { listName } = req.query;
    db.todo.findAll({
      where: { list_name: listName }
    })
    .then(todos => {
      if (todos) { res.status(200).send(todos) }
      else { res.status(404).send('List not found'); }
    });
  },
  post: (req, res) => {
    const { todo, listName } = req.body;
    db.todo.create({
        name: todo,
        list_name: listName
    })
    .then(todo => {
      res.status(201).send(todo);
    });
  },
  delete: (req, res) => {
    const { todo } = req.query;
    db.todo.destroy({
      where: { name: todo }
    })
    .then(() => {
      res.status(202).send('Entry deleted');
    })
  }
}
