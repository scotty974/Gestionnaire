
import * as dotenv from 'dotenv'
dotenv.config()
import express from "express";
import register from './route/register.js'
import data from './route/data.js'
import login from './route/login.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const port = 8080

app.use('/', register) ;
app.use('/', data);
app.use('/', login)
// run the server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);     
  });