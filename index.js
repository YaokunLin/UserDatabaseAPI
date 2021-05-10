import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';

const app = express();
const PORT = '5000';

app.use(bodyParser.json());

app.use('/users', usersRoutes); // all requests here starts with '/users'

app.get('/', (request, respond) => {
  console.log('[TEST]!');
  respond.send("hello from homepage.");

});

app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));