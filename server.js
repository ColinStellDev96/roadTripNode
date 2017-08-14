// REQUIRE
var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');

// APP
var app = express();

// STATIC PATHS
app.use(express.static('./public'));

// BODY PARSER MIDDLEWARE
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

/*---- CHICAGO/ HOME --------------------------------------*/
app.get('/chicago', function (req, res) {
    res.sendFile('./index.html', {root:'./public'});
});

app.post('/boston', function (req, res) { //Next City Button
    res.redirect('./boston.html');
});

/* --- CARGO PAGE -----------------------------------------*/

app.get('/cargo', function (req, res) {
    res.sendFile('./cargo.html', {root: './public'});
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
