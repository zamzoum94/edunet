const router = require('express').Router();

const handler = require('../handlers');

router.post('/signup', handler.signeUp);

router.post('/login', handler.login);


module.exports = router;