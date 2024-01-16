const Router = require('express');
const router = new Router();
const profileController = require('../controllers/profileController');
const authMiddleware = require('../middleware/authMiddleware');



router.post('/',authMiddleware, profileController.createProfile);
router.get('/',authMiddleware, profileController.getProfile);


module.exports = router;