import express from 'express';
import mongoose from 'mongoose';
import { config } from 'dotenv';

import TodoRouter from './routers/todo';

config();

const app = express();

app.use(express.json());

app.use('/todo', TodoRouter);

const PORT = process.env.PORT || 3000;
const DB_URI = process.env.DB_URI as string;

mongoose.connect(DB_URI).then(() => {
  console.log('connected to database successfully...')
  
  app.listen(PORT, () => console.log(`server is running on port ${PORT}...`));
}).catch((error) => {
  console.error('error connecting to the database');
  console.error(error);
});
