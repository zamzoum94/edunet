const router = require('express').Router();

const handler = require('../handlers');

router
    .route('/')
    .get(handler.getCoursesEnrolled);


module.exports= router;