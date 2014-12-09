var express = require('express');
var app = express();
var port = process.env.PORT || 3000


app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));

app.set('views', __dirname);

app.get('*', function(req, res){
    res.render('index');
});

app.listen(port, function(req, res) {
    console.log('express server listening at port', port);
})