const db = require('../database/db');
exports.getCoursesEnrolled = async (req, res, next) => {
    try{
        const userId = 1
        console.log(userId);
        const subscribe = await db.Course_Student.findAll({ where :
                {
                    studentId: userId
                }
        });
        res.status(201).json(subscribe);
    }
    catch(err) {
        res.status(400);
        next(err)
    }
}