const db = require('../database/db');
const bcrypt = require('bcrypt');
const jwt = require ('jsonwebtoken');

exports.signUp = async(req, res, next) => {
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        if(req.body.role === 'teacher'){
            //var university = await db.University.findOrCreate({name : req.body.university});
            var teacher = await db.Teacher.create({
                first_name : req.body.first,
                last_name : req.body.last,
                email: req.body.email,
                password : hashedPassword,
                github : req.body.github,
                linkedIn : req.body.linkedIn,
                photo : req.body.photo || "https://microhealth.com/assets/images/illustrations/personal-user-illustration-@2x.png",
                post: req.body.post,
               // universityId : university.id
            });
            const {id, email} = teacher;
            //const universityName = university.name;
            const token = jwt.sign({id, email}, process.env.SECRET);
            res.status(201).json({id, email, token})
        }

        else if(req.body.role === 'student'){
            var student = await db.Student.create({
                first_name : req.body.first,
                last_name : req.body.last,
                email: req.body.email,
                password : hashedPassword,
                photo : req.body.photo || "https://microhealth.com/assets/images/illustrations/personal-user-illustration-@2x.png"
            });
            const {id, email} = student;
            const token = jwt.sign({id, email}, process.env.SECRET);
            res.status(201).json({id, email, token})
        }
    }
    catch(e)
        {
            if(e.name === 'SequelizeUniqueConstraintError' ){
                res.send('An account with this email already exists')
            }
        }
};

exports.login = async(req, res, next) =>{
    try{
        const role = (req.body.role === 'teacher')? 'Teacher' : 'Student';
        const user = await db[role].findOne({where:{email : req.body.email}});

        if(!user){
            res.send('user not found');
            console.log('user not found yehelkek zemzmi')
        }
        else{
            const valid = await bcrypt.compare(req.body.password, user.password);
            if(!valid){
                res.status(404).send('not valid password');
            }
            else{
                const {id, email} = user;
              /*  const university = await db.University.findOne({where:{id : user.universityId }});
                const universityName = university.name;*/
                const token = jwt.sign({id, email}, process.env.SECRET);
                res.status(200).json({id, email, token})
            }
        }

    }
    catch(e){
        res.send('failed to login due to',e.name)
    }
};