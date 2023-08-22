import express from 'express'
import connectDB from './db.js'
import userRouter from './Routers/userRouter.js';
import linkRouter from './Routers/linkRouter.js';
// import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv'

dotenv.config()

const app = express();
const port = 6002;
connectDB();

app.use(bodyParser.json());
// app.use(cors());

app.use('/users',userRouter);
app.use('/links',linkRouter);
// app.use(Db)
app.listen(process.env.PORT, () => {
    console.log(`app listening on http://localhost:${process.env.PORT}`)
});