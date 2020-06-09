const users = require('../data/index')

const list = (req, res) => {
  res.json(users)
}

module.exports = { list }