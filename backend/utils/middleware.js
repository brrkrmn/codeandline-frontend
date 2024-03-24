const User = require('../models/user')
const Folder = require('../models/folder')
const jwt = require('jsonwebtoken')

const requestLogger = (request, response, next) => {
  console.log('Method', request.method);
  console.log('Path', request.path);
  console.log('Body', request.body);
  next();
}

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

const errorHandler = (error, request, response, next) => {
  console.log('Error:', error.message);

  if (error.name === 'CastError') {
    return response
      .status(400)
      .send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response
      .status(400)
      .json({ error: error.message })
  } else if (error.name ===  'JsonWebTokenError') {
    return response
      .status(401)
      .json({ error: error.message })
  } else if (error.name === 'TokenExpiredError') {
    return response.status(401).json({ error: 'token expired' })
  }
  next(error);
}

const tokenExtractor = (request, response, next) => {
  const authorization = request.get('authorization')
  if (authorization && authorization.startsWith('Bearer ')) {
      const token = authorization.replace('Bearer ', '')
      request.token = token
  }
  next()
}

const userExtractor = async (request, response, next) => {
  const decodedToken = jwt.verify(request.token, process.env.SECRET)

  if (!decodedToken.id) {
      return response.status(401).json({ error: 'invalid token' })
  }
  const user = await User.findById(decodedToken.id)

  request.user = user
  next()
}

const folderExtractor = async (request, response, next) => {
  const folderId = request.body.folder

  if (folderId) {
    const folder = await Folder.findById(folderId)
    request.folder = folder
  }
  next()
}

module.exports = {
  requestLogger,
  unknownEndpoint,
  errorHandler,
  tokenExtractor,
  userExtractor,
  folderExtractor,
}