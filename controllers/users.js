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
const update = (req, res) => {
  let userId = users.find( user => user.id == req.params.id)
  let index = users.indexOf(userId);
  let user = users[index];
  
  let updateUser = Object.assign(user, req.body);
  
  res.json(updateUser)
}

// REMOVE -- DELETE /users/:id
const remove = (req, res) => {
  let user = users.find( user => user.id == req.params.id)

  if(user) {
    user.isActive = "false"
  }
  res.json(user)
}


module.exports = { list, show, create, update, remove }