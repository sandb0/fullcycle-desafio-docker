const { mysqlConnection } = require("./database");

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS people (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(45),
    PRIMARY KEY (id)
  );
`;

const createPeopleQuery = `
  INSERT INTO people (
    name
  ) VALUE (
    "Fulano de Tal"
  );
`;

const findLastPeopleQuery = `
  SELECT name FROM people ORDER BY id DESC LIMIT 1;
`;

const findLastPeople = () => new Promise((resolve, reject) => {
  mysqlConnection.query(findLastPeopleQuery, (error, result) => {
    if (error) {
      reject(error);
    }

    resolve(result);
  });
});

const queryCallback = (error, results) => {
  if (error) {
    console.error(error);
  }

  console.log(results);
}

const seedDatabase = () => {
  mysqlConnection.query(createTableQuery, queryCallback);
  mysqlConnection.query(createPeopleQuery, queryCallback);
}

module.exports = { seedDatabase, findLastPeople };