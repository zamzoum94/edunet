const db = require('../database/db');

exports.showCourses = async (req, res, next) =>{
    try{
        const courses = await db.Course.findAll({})
        res.status(200).json(courses)
    }
    catch(err){
        res.status(400)
        next(err)
    }
}

exports.createCourses = async (req, res, next) => {
    try{
        const {
            title,
            description,
            category,
            photo
        }= req.body

        const course = await db.Course.create({
            title,
            description,
            category,
            photo
        })
        res.status(201).json(course)
    }
    catch(err){
        res.status(400)
        next(err)
    }
}