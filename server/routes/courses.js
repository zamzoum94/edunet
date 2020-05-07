const router = require('express').Router();

const handler = require('../handlers');

router
    .route('/')
    .get(handler.showCourses)

    .post(handler.createCourses)

/*router
    .route('/:id')
    .get(handler.getCourse)
    .delete(handler.deleteCourses)
    .put(handler.updateCourse)*/

module.exports = router;