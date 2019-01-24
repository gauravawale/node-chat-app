const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message');
const publicPath = path.join(__dirname, '../public');

let port = process.env.PORT || 3000;
let app = express();

let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newMessage', generateMessage('Admin', 'Welcome to chat app'));

    socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));

    socket.on('disconnect', () => {
       console.log('Disconnected from client');
    });

    socket.on('createMessage', (newMessage) => {
        console.log('Create Message', newMessage);
        io.emit('newMessage', {
            from: newMessage.from,
            text: newMessage.text,
            createAt: new Date().getTime()
        });

        // socket.broadcast.emit('newMessage', {
        //     from: newMessage.from,
        //     text: newMessage.text,
        //     createAt: new Date().getTime()
        // });
    });
});

server.listen(port, () => {
    console.log('Stared on port ', port);
});

