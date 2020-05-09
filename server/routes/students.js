const router = require('express').Router();

const handler = require('../handlers');

router
    .route('/:id')
    .get(handler.getCoursesEnrolled);


module.exports= router;