'use strict';

module.exports = (app, io) => {

    app.get('/', (req, res, next) => {
        res.render('index');
    });

    io.on('connection', (socket) => {
        socket.emit('data', {
            lists: [
                {id: 0, name: 'something', items: [
                    {name: 'item1', details: 'afds'},
                    {name: 'item2', details: 'adfsfdas'}
                ]}
            ]
        })
    });
};