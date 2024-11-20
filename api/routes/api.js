const router = require('express').Router();

// AUTHENTICATION ROUTES --------------------------------
const authController = require('../controllers/auth.controller');

router.post('/auth/registration', authController.registration);
router.get('/auth/login', authController.login);

const astroController = require('../controllers/astro.controller');
router.post('/get-horo',astroController.searchHoroscope);


module.exports = router;