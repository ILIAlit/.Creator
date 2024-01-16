const Router = require('express');
const router = new Router();
const userRouter = require('./userRoutes');
const profileRouter = require('./profileRoutes');

router.use('/user', userRouter);
router.use('/profile', profileRouter);


module.exports = router;