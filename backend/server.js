import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/db.js';
import UserRouter from './router/UserRouter.js';
import { NotFound, handle } from './middleware/error.js';
import cookieParser from 'cookie-parser';

dotenv.config();

const port = process.env.PORT || 5000; 
connectDb();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())


app.get('/', (req, res) => res.send('Server is ready'));
app.use('/api/users', UserRouter);


app.use(NotFound);
app.use(handle);

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
