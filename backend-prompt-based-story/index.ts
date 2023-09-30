import express from 'express';
require("dotenv").config();
import {router} from './routes/route';
const mongoose = require("mongoose");
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/story', router)

app.listen(process.env.EXPRESS_SERVER_PORT, () => {
    console.log(`Server Started at ${process.env.EXPRESS_SERVER_PORT}`)
})

mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err: any) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

