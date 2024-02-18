const Router = require('express')
const router = new Router()
const {
	createFavorite,
	getFavorites,
	deleteFavorite,
} = require('../controllers/favoriteController.js')

const authMiddleware = require('../middleware/authMiddleware.js')

router.post('/', authMiddleware, createFavorite)
router.get('/', authMiddleware, getFavorites)
router.delete('/', authMiddleware, deleteFavorite)

module.exports = router
