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

/* --- CARGO PAGE -----------------------------------------*/

app.get('/cargo', function (req, res) {
    res.sendFile('./cargo.html', {root: './public'});
});

app.post('/validate-cargo', function(req, res){
    console.log(req.body);
    var total_cost = req.body.total_cost;
    var total_weight = req.body.total_weight;
    // console.log(total_cost);
    // console.log(total_weight);
    if (total_cost > 200 && total_weight > 200) {
        res.send({message: "cargo is not vaild"});
    } else {res.send({message: "cargo is vaild"})};
});

/* --- BOSTON --------------------------------------------- */
app.get('/boston', function (req, res) {
    res.sendFile('./boston.html', {root:'/public'});
});

/*-- NORTH CAR -----------------------------------------------*/
app.get('/northCar', function (req, res) {
    res.sendFile('./northCar.html', {root:'/public'});
});

/*----- DELAWARE------------------------------------------------ */
app.get('/delaware', function (req, res) {
    res.sendFile('./delaware.html', {root:'/public'});
});

/*---- DENVER----------------------------------------------------- */
app.get('/denver', function (req, res) {
    res.sendFile('./denver.html', {root:'/public'});
});

/* Listen -----------------------*/
app.listen(8000);
