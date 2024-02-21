const Router = require('express')
const authMiddleware = require('../middleware/authMiddleware')
const router = new Router()
const {
	createPublication,
	getOnePublication,
	checkIsLike,
	getPublications,
	checkIsSave,
	getUserPublications,
} = require('../controllers/publicationController')

router.post('/', authMiddleware, createPublication)
router.get('/checkIsLike', authMiddleware, checkIsLike)
router.get('/checkIsSave', authMiddleware, checkIsSave)
router.get('/getUserPublications', authMiddleware, getUserPublications)
router.get('/', getPublications)
router.get('/getOnePublication', getOnePublication)

module.exports = router
