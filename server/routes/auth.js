const router = require('express').Router();

const handler = require('../handlers');

router.post('/signup', handler.signUp);

router.post('/login', handler.login);


module.exports = router;