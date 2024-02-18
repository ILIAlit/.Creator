const Router = require('express')
const router = new Router()
const userRouter = require('./userRoutes')
const profileRouter = require('./profileRoutes')
const publicationRouter = require('./publicationRoutes')
const tagRouter = require('./tagRoutes')
const likeRouter = require('./likeRoutes')
const favoriteRouter = require('./favoriteRoutes')

router.use('/user', userRouter)
router.use('/profile', profileRouter)
router.use('/publication', publicationRouter)
router.use('/tag', tagRouter)
router.use('/like', likeRouter)
router.use('/favorite', favoriteRouter)

module.exports = router
