const router = require('express').Router();
const { register, login, whoami, activate } = require('../controllers/auth.controller');
const { restrict } = require('../middlewares/auth.middleware');

router.post('/register', register);
router.post('/login', login);
router.get('/whoami', restrict, whoami);

// render halaman aktivasi
router.get('/email-activation', (req, res) => {
    let { token } = req.query;
    res.render('email-activation', { token });
});

// update user.is_verified
router.post('/email-activation', activate);

module.exports = router;