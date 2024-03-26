const express = require('express');
const mongoose = require('mongoose');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');

//dotenv config
dotenv.config();

//rest object
const app = express();

app.use(express.json());
app.use(morgan('dev'));

//routes
app.get('/', (req, res) => {
    res.status(200).send({
        message: "Server running"
    });
});

//port
const port = process.env.PORT || 8080;

//listen port
app.listen(port, () => {
    console.log(`Server running in ${process.env.NODE_MODE} mode on port ${process.env.PORT}`.bgCyan.white);
});
