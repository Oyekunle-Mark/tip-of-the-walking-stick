const connect = require('./database/connect');

const server = require('./api/server');

const PORT = 5000;

connect('mongodb://localhost:27017/noteCRUD')
  .then(() =>
    server.listen(PORT, () => console.log(`Server listening on port ${PORT}`)),
  )
  .catch(err => console.error(err));
