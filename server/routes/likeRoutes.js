const Router = require('express')
const router = new Router()
const {
	createLike,
	deleteLike,
	getUserLikes,
} = require('../controllers/likeController')
const authMiddleware = require('../middleware/authMiddleware')

router.get('/getUserLikes', authMiddleware, getUserLikes)
router.post('/', authMiddleware, createLike)
router.delete('/', authMiddleware, deleteLike)

module.exports = router
