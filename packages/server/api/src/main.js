import { env } from 'custom-env';
import express from 'express';
import cors from 'cors';
import db from './models';
import plans from './routes/plans';

env();
const port = process.env.API_PORT || 3333;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.sequelize
  .sync()
  .then(() => {
    console.log('Synced db.');
  })
  .catch((err) => {
    console.log('Failed to sync db: ' + err.message);
  });

app.get('/', (_, res) => {
  res.send({ message: 'Welcome to api!' });
});

app.use('/plans', plans);

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`);
});
server.on('error', console.error);
