const express = require('express');
const server = express();
const router = require('./routes');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

server.use(express.urlencoded({ extended: true }));

server.set('view engine', 'ejs');
server.set('views', 'views');

server.use(express.static('public'));

server.use(router);

server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
