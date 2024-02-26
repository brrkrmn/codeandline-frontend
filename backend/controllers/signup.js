const bcrypt = require('bcrypt');
const signupRouter = require('express').Router()
const User = require('../models/user')

signupRouter.post('/', async (request, response) => {
  const { email, password } = request.body

  const existingEmail = await User.findOne({ email: email });
  if (existingEmail) return response
    .status(400)
    .send("There's already an account with this email");

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password, saltRounds)

  const user = new User({
    email,
    passwordHash
  })

  const savedUser = await user.save()

  response.status(201).json(savedUser)
})

module.exports = signupRouter;