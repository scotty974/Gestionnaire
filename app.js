import express from "express";
import * as dotenv from 'dotenv'


dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const port = 8080

// run the server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);     
  });