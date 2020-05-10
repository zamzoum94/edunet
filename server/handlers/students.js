const db = require('../database/db');
exports.getCoursesEnrolled = async (req, res, next) => {
    try{
        const {id} = req.params;

        //const student = await db.Student.findOne({where : {id : id}});
       // const subscribe = await db.Course_Student.findAll({ include:[{model : db.Course,through : {where : {studentId: id}}}]});
       const cour = await db.Course_Student.findOne({where:{studentId : id}});
       const subscribe = await db.Course.findOne({where:{id: cour.courseId}})
        console.log(subscribe)
        res.status(201).json(subscribe);
    }
    catch(err) {
        res.status(400);
        next(err)
    }
}