const Router = require('express')
const authMiddleware = require('../middleware/authMiddleware')
const { getPopularTag } = require('../controllers/tagController')
const router = new Router()

router.get('/', getPopularTag)

module.exports = router
