const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const { Client } = require('pg');
const client = new Client(process.env.PG_URI);

client.connect((err) => {
  if (err) {
    console.error('connection error', err.stack);
  } else {
    console.log('Connected PostgreSQL database');
  }
});

module.exports = client;
