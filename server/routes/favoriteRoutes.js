const Router = require('express')
const router = new Router()
const {
	createFavorite,
	deleteFavorite,
	getUserFavorites,
} = require('../controllers/favoriteController.js')

const authMiddleware = require('../middleware/authMiddleware.js')

router.get('/getUserFavorites', authMiddleware, getUserFavorites)
router.post('/', authMiddleware, createFavorite)
router.delete('/', authMiddleware, deleteFavorite)

module.exports = router
