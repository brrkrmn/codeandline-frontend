const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
console.log('Connecting to MONGODB...');

mongoose.connect(config.MONGODB_URI)
    .then(result => {
        console.log('Connected to MongoDB')
    })
    .catch((error) => {
        console.log('Error connecting to MongoDB: ', error.message)
    });

app.use(cors())
app.use(express.static('build'))
app.use(express.json())

module.exports = app