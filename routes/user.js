const express = require('express')
const router =  express.Router()
const user = require('../controllers/user')

//router.get('/create',user.createUser)
router.post('/translator',user.trans)


module.exports = router

