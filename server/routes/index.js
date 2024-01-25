const Router = require('express');
const router = new Router();
const userRouter = require('./userRoutes');
const profileRouter = require('./profileRoutes');
const publicationRouter = require('./publicationRoute')

router.use('/user', userRouter);
router.use('/profile', profileRouter);
router.use('/publication', publicationRouter)


module.exports = router;