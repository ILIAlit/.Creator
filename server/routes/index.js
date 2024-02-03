const Router = require('express');
const router = new Router();
const userRouter = require('./userRoutes');
const profileRouter = require('./profileRoutes');
const publicationRouter = require('./publicationRoute');
const tagRouter = require('./tagRoutes');

router.use('/user', userRouter);
router.use('/profile', profileRouter);
router.use('/publication', publicationRouter);
router.use('/tag', tagRouter);

module.exports = router;
