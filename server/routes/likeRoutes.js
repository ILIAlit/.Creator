const Router = require('express')
const router = new Router()
const { createLike, deleteLike } = require('../controllers/likeController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/', authMiddleware, createLike)
router.delete('/', authMiddleware, deleteLike)

module.exports = router
