var express = require('express');
var app = express();

app.use(express.static('./public'));

/*---- CHICAGO/ HOME --------------------------------------*/
app.get('/chicago', function (req, res) {
    res.sendFile('./index.html', {root:'./public'});
});

app.post('/boston', function (req, res) { //Next City Button
    res.redirect('./boston.html');
});

/* --- BOSTON --------------------------------------------- */
app.get('/boston', function (req, res) {
    res.sendFile('./boston.html', {root:'/public'});
});

app.post('/northCar', function (req, res) { //Next City Button
    res.redirect('./northCar.html');
});

/*-- NORTH CAR -----------------------------------------------*/
app.get('/northCar', function (req, res) {
    res.sendFile('./northCar.html', {root:'/public'});
});

app.post('/delaware', function (req, res) { //Next City Button
    res.redirect('./delaware.html');
});

/*----- DELAWARE------------------------------------------------ */
app.get('/delaware', function (req, res) {
    res.sendFile('./delaware.html', {root:'/public'});
});

app.post('/denver', function (req, res) { //Next City Button
    res.redirect('/denver.html');
});
/*---- DENVER----------------------------------------------------- */
app.get('/denver', function (req, res) {
    res.sendFile('./denver.html', {root:'/public'});
});

app.post('/chicago', function (req, res) { //Back Home Button
    res.redirect('./index.html');
});

/* Listen -----------------------*/
app.listen(8000);
