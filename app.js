
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index');

const app = express();


app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);


app.set('views', './views');


app.use(bodyParser.urlencoded({ extended: true }));


app.use('/', routes);


app.use((req, res, next) => {
    res.status(404).send('404 Not Found');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }));


let students = [];


app.post('/student', (req, res) => {
    // Получение данных из формы, отправленной методом POST
    const { firstName, lastName, course } = req.body;


    const student = {
        firstName,
        lastName,
        course
    };


    students.push(student);


    res.send('Student added successfully!');
});


const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

