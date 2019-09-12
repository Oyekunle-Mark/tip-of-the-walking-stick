const debug = require('debug')('noteCRUD');

const connect = require('./database/connect');
const server = require('./api/server');

const PORT = 5000;

connect('mongodb://localhost:27017/noteCRUD')
  .then(() =>
    server.listen(PORT, () => debug(`Server listening on port ${PORT}`)),
  )
  .catch(err => debug(err));
