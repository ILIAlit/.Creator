const Router = require('express')
const authMiddleware = require('../middleware/authMiddleware')
const router = new Router()
const { createPublication, getOnePublication, getPublication } = require('../controllers/publicationController')

router.post('/',authMiddleware, createPublication)
router.get('/', getPublication)
router.get('/:id', getOnePublication)


module.exports = router