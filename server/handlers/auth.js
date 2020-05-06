const db = require('../database/db');
const bcrypt = require('bcrypt');

exports.signUp = async(req, res, next) => {
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        if(req.body.role === 'teacher'){
            var teacher = await db.Teacher.create({
                first_name : req.body.first,
                last_name : req.body.last,
                email: req.body.email,
                password : hashedPassword,
                github : req.body.github,
                linkedIn : req.body.linkedIn,
                photo : req.body.photo || "https://microhealth.com/assets/images/illustrations/personal-user-illustration-@2x.png"
            });
            res.status(201).json(`Welcome ${teacher.first} ${teacher.last}. plz check your email to confirm your account`)
        }

        else if(req.body.role === 'student'){
            var student = await db.Student.create({
                first_name : req.body.first,
                last_name : req.body.last,
                email: req.body.email,
                password : hashedPassword,
                photo : req.body.photo || "https://microhealth.com/assets/images/illustrations/personal-user-illustration-@2x.png"
            });
            res.status(201).json(`Welcome ${student.first} ${student.last}. plz check your email to confirm your account`)
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
                    res.send('not valid password');
                }
                else{
                    res.send('login success')
                }
            }

    }
    catch(e){
        res.send('failed to login due to',e.name)
    }
};