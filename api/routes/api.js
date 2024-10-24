const router = require('express').Router();

// AUTHENTICATION ROUTES --------------------------------
const authController = require('../controllers/auth.controller');

router.post('/auth/registration', authController.registration);
router.get('/auth/login', authController.login);

module.exports = router;