let socket = io();

socket.on('connect', () => {
    console.log('Connected to Server');

    socket.emit('createMessage', {
        from: 'Gaurav',
        text: 'Hey, this is Gaurav'
    });
});

socket.on('disconnect', () => {
    console.log('Disconnected from Server');
});

socket.on('newMessage', (data) => {
    console.log('New Message received', data);
});


