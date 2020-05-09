const router = require('express').Router();

const handler = require('../handlers');

router
    .route('/')
    .get(handler.showCategories);

router
    .route('/:name')
    .get(handler.showCoursesByCategory);

module.exports= router;