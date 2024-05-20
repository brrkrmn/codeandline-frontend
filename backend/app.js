const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose');
require('express-async-errors')
const loginRouter = require('./controllers/login');
const signupRouter = require('./controllers/signup');
const notesRouter = require('./controllers/notes')
const middleware = require('./utils/middleware');
const foldersRouter = require('./controllers/folders');

mongoose.set('strictQuery', false);
console.log('Connecting to MONGODB...');

mongoose.connect(config.MONGODB_URI)
    .then(result => {
        console.log('Connected to MongoDB')
    })
    .catch((error) => {
        console.log('Error connecting to MongoDB: ', error.message)
    });

app.use(cors({
    origin: '*',
}))
app.use(express.static('build'))
app.use(express.json())

app.use(middleware.requestLogger)

app.use('/api/signup', signupRouter)
app.use('/api/login', loginRouter)
app.use('/api/notes', middleware.tokenExtractor, middleware.userExtractor, notesRouter)
app.use('/api/folders', middleware.tokenExtractor, middleware.userExtractor, foldersRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app