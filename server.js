var express = require('express');

var app = express();

app.use(express.static('./public'));

/* CHICAGO/ HOME */
app.get('/chicago', function (req, res) {
    res.sendFile('./index.html', {root:'./public'});
});

/* BOSTON */
app.post('/boston', function (req, res) {
    res.redirect('/boston.html');
});

app.get('/boston', function (req, res) {
    res.sendFile('./boston.html', {root:'/public'});
});

/* NORTH CAR */
app.post('/northCar', function (req, res) {
    res.redirect('/northCar.html');
});

app.get('/northCar', function (req, res) {
    res.sendFile('./northCar.html', {root:'/public'});
});

/* DELAWARE */
app.post('/delaware', function (req, res) {
    res.redirect('/delaware.html');
});

app.get('/delaware', function (req, res) {
    res.sendFile('./delaware.html', {root:'/public'});
});

/* DENVER */
app.post('/denver', function (req, res) {
    res.redirect('/denver.html');
});

app.get('/denver', function (req, res) {
    res.sendFile('./denver.html', {root:'/public'});
});

/* HOME BUTTON */
app.post('/chicago', function (req, res) {
    res.redirect('/index.html');
});

app.listen(8000);
