const db = require('sequelize');

const sql = new db('edunet','root','root',{dialect: 'mysql'});

const student = sql.define('student',{
    first_name : db.STRING,
    last_name : db.STRING,
    email: db.STRING,
    password : db.STRING,
    photo : db.STRING
});

const teacher = sql.define('teacher',{
    first_name : db.STRING,
    last_name : db.STRING,
    email: db.STRING,
    password : db.STRING,
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

course.belongsTo(teacher);
video.belongsTo(course);

student.sync();
course.sync();
video.sync();
teacher.sync();
course_student.sync();
