var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
    console.log('Request Url:' + req.url);
    next();
});

app.get('/', function (req, res) {
    res.send('<html><head><link rel="stylesheet" type="text/css" href="assets/style.css"></head><body><h1>Hello World!</h1></body></html>')
});

// app.get('/person/:id', function (req, res) {
//     res.render('person', { ID: req.params.id, Qstr: req.query.qstr });
// });

app.get('/person/:id', function (req, res) {
    res.render('person', { ID: req.params.id, Message: req.query.message, Times: req.query.times });
});

app.listen(port);