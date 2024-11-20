const router = require('express').Router();

// AUTHENTICATION ROUTES --------------------------------
const authController = require('../controllers/auth.controller');

router.post('/auth/registration', authController.registration);
router.post('/auth/login', authController.login);

<<<<<<< HEAD
const astroController = require('../controllers/astro.controller');
router.post('/get-horo',astroController.searchHoroscope);


module.exports = router;
=======
module.exports = router;
>>>>>>> e41522418fbc7f69d742b76435a9afb36ed19746
