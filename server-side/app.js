var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
const filePath = path.join(__dirname,"..","client-side", "build" )

app.use(express.static(filePath));
app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
