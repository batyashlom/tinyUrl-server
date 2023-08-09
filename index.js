import express from 'express'
import connectDB from './db.js'
// const express = require('express')
const app = express();
const port = 6001
connectDB();
// const DB = require('./db.js')
// const Db = require('mongodb')


// app.use(Db)
app.listen(port, () => {
    console.log(`app listening on http://localhost:${port}`)
});