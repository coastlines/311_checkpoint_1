const express = require('express')
const router = express.Router()
//const { list, show, create, update, remove } = require('../controllers/users.js')
const { list, show, create, update } = require('../controllers/users.js')

// GET /users
router.get('/users', list)

// GET /users/:id
router.get('/users/:id', show)

// POST /users
router.post('/users', create)

// PUT /users/:id
router.put('/users/:id', update)

// // DELETE /users/:id
// router.delete('/users/:id', remove)

module.exports = router;
