import express from 'express';
import faker from 'faker';
import { dbConnection } from './db/connection.js';

const app = express();
const PORT = 3000;

const insertPerson = () => {
  return new Promise((resolve, reject) => {
    const randomName = faker.name.findName();
    const query = 'INSERT INTO people (name) VALUES (?)';

    dbConnection.query(query, [randomName], (err) => {
      if (err) return reject(err);

      resolve();
    });
  });
};

app.get('/', async (req, res) => {
  try {
    await insertPerson();

    dbConnection.query('SELECT name FROM people', (error, rows) => {
      if (error) {
        res.json({ error });
      } else {
        const title = '<h1>Full Cycle Rocks!</h1>';
        const names = rows.map((row) => `- ${row.name}`).join('<br>');

        res.send(`${title}<br>${names}`);
      }
    });
  } catch (error) {
    res.json({ error });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
