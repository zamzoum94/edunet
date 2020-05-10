const router = require('express').Router();

const handler = require('../handlers');

const app = require('../middlewares/auth');

router
    .route('/:id')
    .get(app, handler.getCoursesEnrolled);


module.exports= router;