const db = require('sequelize');

const sql = new db('edunet','root','root',{dialect: 'mysql'});

const student = sql.define('student',{
    first_name : db.STRING,
    last_name : db.STRING,
    email: {
        type: db.STRING,
        allowNull: false,
        validate: {
            isEmail:true
        },
        unique: true
    },
    password : db.STRING,
    photo : db.STRING
});

const teacher = sql.define('teacher',{
    first_name : db.STRING,
    last_name : db.STRING,
    email: {
        type: db.STRING,
        allowNull: false,
        validate: {
            isEmail:true
        },
        unique : true
    },
    password : db.STRING,
    github: db.STRING,
    linkedIn: db.STRING,
    photo : db.STRING
});

const course = sql.define('course',{
    title : db.STRING,
    category : db.STRING,
    description :db.STRING,
    photo : db.STRING
});


const video = sql.define('video',{
    title : db.STRING,
    description :db.STRING,
    url : db.STRING
});

const course_student = sql.define('course_student',{});

student.belongsToMany(course, {through: course_student});
course.belongsToMany(student, {through: course_student});

//course.belongsTo(teacher);
course.hasOne(teacher);
teacher.hasMany(course);
video.belongsTo(course);
course.hasMany(video);

student.sync();
course.sync();
video.sync();
teacher.sync();
course_student.sync();

module.exports.Student = student;
module.exports.Course = course;
module.exports.Video = video;
module.exports.Teacher = teacher;
module.exports.Course_Student = course_student;