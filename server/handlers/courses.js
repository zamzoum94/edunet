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
            photo,
            teacherId
        }= req.body

        const course = await db.Course.create({
            title,
            description,
            category,
            photo,
            teacherId
        })
        res.status(201).json(course)
    }
    catch(err){
        res.status(400)
        next(err)
    }
}

exports.getCourse = async (req, res, next) => {
    try{
        const {id} = req.params
        const course = await db.Course.findOne({where: {id : id}})

        if (!course){
            res.status(404).json(" No course with this id")
        }
        res.status(200).json(course)
    }
    catch(err){
        res.status(400)
        next(err)
    }
}

exports.deleteCourses= async (req, res, next) => {
    try{
        const {id} = req.params;
        const course = await db.Course.findOne({where: {id : id}})
        if (!course){
            res.status(404).json(" No course with this id")
        }
        else{
            await course.destroy()
            res.status(202).json(course)
        }
    }
    catch(err){
        res.status(400)
        next(err)
    }
}