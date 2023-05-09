const express = require('express')
const router = express.Router()
const Controllers =  require('../Controllers/Controllers')


router.get('/' ,Controllers.getServerInfo )
router.get('/get-personal-details' ,Controllers.getPersonalDetails )
router.get('/details-form' ,Controllers.getForm )
router.post('/result' ,Controllers.getResult )






module.exports = router



