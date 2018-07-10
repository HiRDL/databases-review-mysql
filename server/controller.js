module.exports = {
  fetch: (req, res) => {
    // http://localhost:3000/api/todolist/?name=To+Do+List
    const { listName } = req.query;
    res.status(200).send('fetched');
  },
  post: (req, res) => {
    const { todo, listName } = req.body;
    res.status(201).send('posted');
  },
  delete: (req, res) => {
    const { todo } = req.query;
    res.status(202).send('deleted');
  }
}