var express = require('express');
var app = express();
var mongoose = require('mongoose');
var port = process.env.PORT || 3000
var jobModel = require('./models/Job');


app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));

app.set('views', __dirname);

app.get('/api/jobs', function(req, res) {
    res.send('test');
});

app.get('*', function(req, res){
    res.render('index');
});

mongoose.connect('mongodb://localhost/conIntegration');

var con = mongoose.connection;

con.once('open', function() {
    console.log('connected to mongodb successfully');
    jobModel.seedJobs();
});

app.listen(port, function(req, res) {
    console.log('express server listening at port', port);
})