const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'mysql-fullcycle-db'
});

module.exports = { mysqlConnection };