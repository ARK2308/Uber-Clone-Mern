const dotenv = require('dotenv')
dotenv.config();
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')
const cors = require('cors')
const userRoutes = require('./routes/user.routes');
const db = require("./db/db");
db.connect();





app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());



app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/users', userRoutes);






module.exports = app;
