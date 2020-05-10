const db = require('../database/db');

exports.getCoursesEnrolled = async (req, res, next) => {
    try{
        const {id} = req.params;
        const query = await db.sql.query(`select * from Courses join Course_Students on Course_Students.courseId = Courses.id and Course_Students.studentId = (:id)`,
            {
                replacements:
                    {id: id},
                type: db.sql.QueryTypes.SELECT
            });
        const student = await db.Student.findOne({where : {id : id}});
        console.log(query);
        res.status(201).json({query, student});
    }
    catch(err) {
        res.status(400);
        next(err)
    }
};