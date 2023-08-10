import express from 'express'
import connectDB from './db.js'
import userRouter from './Routers/userRouter.js'
// import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const port = 6002;
connectDB();

app.use(bodyParser.json());
// app.use(cors());

app.use('/users',userRouter);

// app.use(Db)
app.listen(port, () => {
    console.log(`app listening on http://localhost:${port}`)
});