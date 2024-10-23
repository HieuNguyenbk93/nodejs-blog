const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', handlebars.engine({
    extname: ".hbs"
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource\\views'));
console.log(path.join("PATH: ",__dirname, 'resource\\views'));

app.get('/', (req, res) => {
    return res.render('home');
})

app.get('/news', (req, res) => {
    return res.render('news');
})

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))