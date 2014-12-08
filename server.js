var express = require('express');
var app = express();

app.set('view engine', 'jade');

app.get('*')