const express = require('express')
const router = express.Router()
const Controllers =  require('../Controllers/AdminController')


router.get('/' ,Controllers.getAdminInfo )
router.get('/get-personal-details' ,Controllers.getPersonalDetails )





module.exports = router



