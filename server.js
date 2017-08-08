var express = require('express');

var app = express();

app.use(express.static('./public'));

app.get('/chicago', function (req, res) {
    res.sendFile('./index.html', {root:'./public'});
});

app.listen(8000);
