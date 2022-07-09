const express = require('express');

const { mysqlConnection } = require('./database');
const { appRouter } = require('./routers');
const { seedDatabase } = require('./seed');

const app = express();

app.use(appRouter);

// Initialize server after database.
mysqlConnection.connect((error) => {
  if (error) {
    throw error;
  }

  console.log('[+] MySQL database connected.');
  app.listen(3000, () => console.log("[+] node-app is running."));

  seedDatabase();
});
