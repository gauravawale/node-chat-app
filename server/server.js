const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');

let port = process.env.PORT || 3000;
let app = express();

let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.on('disconnect', () => {
       console.log('Disconnected from client');
    });

    socket.on('createMessage', (newMessage) => {
        console.log('Create Message', newMessage);
    });

    socket.emit('newMessage', {
        from: 'Gaurav',
        text: 'How are you?',
        createAt: 1234
    });
});

server.listen(port, () => {
    console.log('Stared on port ', port);
});

