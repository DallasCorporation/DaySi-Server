const express = require('express')
const router = express.Router()
const {
    createCategory, getCategories
} = require('../controllers/categoryController')


router.post('/api/createCategory', createCategory)
router.get('/api/allCategory', getCategories)


module.exports = router