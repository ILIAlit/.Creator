const Router = require('express');
const router = new Router();
const {registration, login, check} = require('../controllers/userController');


router.post('/registration', registration);
router.post('/login', login);
router.get('/auth', check);


module.exports = router;