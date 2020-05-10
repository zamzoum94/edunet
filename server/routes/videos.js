const router = require('express').Router();

const handler = require('../handlers');

const app = require('../middlewares/auth');

router
    .route('/:id')
    .post(handler.postVideo);

module.exports = router;