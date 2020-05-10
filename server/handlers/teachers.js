
const db = require('../database/db');
exports.showTeachers = async (req, res, next) => {
        try{
            const teachers = await db.Teacher.findAll( {});
            res.status(200).json(teachers)
        }
        catch (e) {
            res.status(400);
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
        const course = await db.Course.findAll({where : {teacherId : id}});
        res.status(200).json({teacher, course});
    }
    catch (e) {
        res.status(400);
        next(e)
    }
};

exports.postVideo = async (req, res, next) => {
    try{
        const {id} = req.params;
        const{
            title,
            description,
            url,
        } = req.body;

        const videos = db.Video.create({
            title,
            description : description || 'no description',
            url,
            courseId : id
        })
        res.status(201).json({videos});
    }
    catch (e) {
        console.log(e)
    }
};
