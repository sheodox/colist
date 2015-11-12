'use strict';

module.exports = (app, io) => {

    app.get('/', (req, res, next) => {
        res.render('index');
    });
};