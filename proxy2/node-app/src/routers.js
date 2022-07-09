const { Router } = require('express');
const { findLastPeople } = require('./seed');

const appRouter = Router();

appRouter.get('/', async (_, response) => {
  const data = await findLastPeople();
  const peoplesNamesHtml = data.map((item) => `<p>${item.name}</p>`);

  const htmlResponse = `
    <h1>Full Cycle</h1>
    ${peoplesNamesHtml}
  `;

  return response.send(htmlResponse);
});

module.exports = { appRouter };