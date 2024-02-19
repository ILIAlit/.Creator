const Router = require('express')
const authMiddleware = require('../middleware/authMiddleware')
const router = new Router()
const {
	createPublication,
	getOnePublication,
	checkIsLike,
	getPublications,
	checkIsSave,
} = require('../controllers/publicationController')

router.post('/', authMiddleware, createPublication)
router.get('/checkIsLike', authMiddleware, checkIsLike)
router.get('/checkIsSave', authMiddleware, checkIsSave)
router.get('/:id', getOnePublication)
router.get('/', getPublications)

module.exports = router
