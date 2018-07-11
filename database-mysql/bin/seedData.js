const db = require('../models');

const listData = [
  {
    name: 'To Do List',
  },
];

const todoData = [
  {
    name: 'Cook dinner',
    list_name: 'To Do List'
  },
  {
    name: 'Clean house',
    list_name: 'To Do List'
  },
  {
    name: 'Watch TV',
    list_name: 'To Do List'
  },
  {
    name: 'Sleep',
    list_name: 'To Do List'
  },
];

db.list.sync({ force: false }).then(() => {
  db.list.bulkCreate(listData).then(() => {
    db.todo.sync({ force: false }).then(() => {
      db.todo.bulkCreate(todoData).then(() => {
          console.log('lists & todos seeded');
      });
    });
  });
});