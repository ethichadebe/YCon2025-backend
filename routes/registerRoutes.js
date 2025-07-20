const { registerUser } = require('../controllers/registerController')
const { getRegistrations } = require('../controllers/adminController')
const router = require('express').Router()

router.post('/register', registerUser)
router.get('/registrations', getRegistrations)

module.exports = router
