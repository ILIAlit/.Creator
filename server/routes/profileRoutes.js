const Router = require('express')
const router = new Router()
const profileController = require('../controllers/profileController')
const authMiddleware = require('../middleware/authMiddleware')

router.put('/', authMiddleware, profileController.updateProfile)
router.get('/', authMiddleware, profileController.getProfile)

module.exports = router
