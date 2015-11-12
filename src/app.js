'use strict';
let express = require('express'),
    app = express(),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    server = require('http').createServer(app),
    io = require('socket.io')(server),
    fs = require('fs');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'static')));

require('./routes/index')(app, io);

//some third party things that need to be exposed
app.get('/vex/:dir/:file', (req, res) => {
    fs.createReadStream(path.join('../node_modules/vex-js/', req.params.dir, req.params.file)).pipe(res);
});
app.get('/jquery', (req, res) => {
    fs.createReadStream('../node_modules/jquery/dist/jquery.min.js').pipe(res);
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

server.listen(3000, () => {
    console.log('server listening');
});


module.exports = server;
