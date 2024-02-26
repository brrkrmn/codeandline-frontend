const bcrypt = require('bcrypt')
const loginRouter = require('express').Router()
const User = require('../models/user')
const jwt = require('jsonwebtoken')

loginRouter.post('/', async (request, response) => {
  const { email, password } = request.body
  const user = await User.findOne({ email })
  const passwordCorrect = user === null
    ? false
    : await bcrypt.compare(password, user.passwordHash)

  if (!(user && passwordCorrect)) {
    return response.status(401).json({ error: 'Invalid email or password'})
  }

  const userForToken = {
    email: user.email,
    id: user._id,
  }

  const token = jwt.sign(userForToken, process.env.SECRET, { expiresIn: 60 * 60 })
  response.status(200).send({ token, email: user.email})
})

module.exports = loginRouter