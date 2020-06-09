const users = require('../data/index')

// LIST -- GET /users
const list = (req, res) => {
  res.json(users)
}

// SHOW -- GET /users/:id
const show = (req, res) => {
  let user = users.find( user => user.id == req.params.id)
  res.json(user)
}

// CREATE -- POST /users
const create = (req, res) => {
  let newUser = req.body
  let newId = users.length + 1
  
  newUser.id = newId
  users.push(newUser)

  res.json(users)
}

// UPDATE -- PUT /users/:id

module.exports = { list, show, create }