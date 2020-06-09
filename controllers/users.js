const users = require('../data/index')

const list = (req, res) => {
  res.json(users)
}

const show = (req, res) => {
  let user = users.find( user => user.id == req.params.id)
  res.json(user)
}

module.exports = { list, show }