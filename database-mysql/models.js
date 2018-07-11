const Sequelize = require('sequelize');

const { connection } = require('./');

const list = connection.define('list', {
  name: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
}, { timestamps: false });

const todo = connection.define('todo', {
  name: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  list_name: {
    type: Sequelize.STRING(50),
    allowNull: false
  }
}, { timestamps: false });

connection.sync({ force: false })
//true will drop the table if it exists and replace it so
//setting it to false will avoid this
  .then(() => console.log('successfully synced database'))
  .catch(err => console.log('error syncing database ', err));

module.exports = {
  list,
  todo,
};
