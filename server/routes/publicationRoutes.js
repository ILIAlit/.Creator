const Router = require('express')
const authMiddleware = require('../middleware/authMiddleware')
const router = new Router()
const {
	createPublication,
	getOnePublication,
	checkIsLike,
	getPublications,
} = require('../controllers/publicationController')

router.post('/', authMiddleware, createPublication)
router.get('/check', authMiddleware, checkIsLike)
router.get('/:id', getOnePublication)
router.get('/', getPublications)

module.exports = router
