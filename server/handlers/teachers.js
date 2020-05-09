
const db = require('../database/db');
exports.showTeachers = async (req, res, next) => {
        try{
            const teachers = await db.Teacher.findAll({});
            res.status(200).json(teachers)
        }
        catch (e) {
            res.status(400)
            next(e)
        }
    };

exports.getTeacher = async (req, res, next) => {
    try{
        const {id} = req.params;
        const teacher = await db.Teacher.findOne({where : {id : id}});
        if(!teacher){
            res.status(404).json('no teacher with this id')
        }
        res.status(200).json(teacher);
    }
    catch (e) {
        res.status(400)
        next(e)
    }
}