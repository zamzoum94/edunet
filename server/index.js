require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const routes = require('./routes');


const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.use('/auth', routes.auth);
app.use('/courses', routes.courses);
app.use('/category', routes.category);

app.use('/students', routes.students);

app.use('/teachers', routes.teachers);
app.use('/video', routes.videos)



const port = process.env.PORT || 8080;
app.listen(port , () => {
    console.log(`listening on port ${port}`);
});