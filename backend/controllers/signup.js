const bcrypt = require('bcrypt');
const signupRouter = require('express').Router()
const User = require('../models/user')

signupRouter.post('/', async (request, response) => {
  const { email, username, password } = request.body

  const existingEmail = await User.findOne({ email: email });
  const existingUsername = await User.findOne({ username: username })

  if (existingEmail) return response
    .status(400)
    .send("There's already an account with this email");

  if (existingUsername) return response
    .status(400)
    .send("There's already an account with this username");

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password, saltRounds)

  const user = new User({
    email,
    username,
    passwordHash
  })

  const savedUser = await user.save()

  response.status(201).json(savedUser)
})

module.exports = signupRouter;