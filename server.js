var express = require('express');
var app = express();
var mongoose = require('mongoose');
var port = process.env.PORT || 3000


app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));

app.set('views', __dirname);

app.get('/api/jobs', function(req, res) {
    res.send('test');
});

app.get('*', function(req, res){
    res.render('index');
});

mongoose.connect('mongodb://localhost/jobfinder');

var con = mongoose.connection;

con.once('open', function() {
    console.log('connected to mongodb successfully');
});

app.listen(port, function(req, res) {
    console.log('express server listening at port', port);
})