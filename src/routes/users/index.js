const router = require('express').Router();
const { validateRegistration, validateLogin } = require('../../utils/validators');
const { verifyToken } = require('../../utils/middlewares/verifyAuthToken')
const userController = require('../../controllers/users')

router.post('/signup', validateRegistration, userController.register);

router.post('/login', validateLogin, userController.login);

router.get('/preferences', verifyToken, userController.getPreferences);

router.put('/preferences', verifyToken, userController.updatePreferences)

module.exports = router;