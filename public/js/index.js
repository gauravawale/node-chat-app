let socket = io();

socket.on('connect', () => {
    console.log('Connected to Server');
});

socket.on('disconnect', () => {
    console.log('Disconnected from Server');
});

socket.on('newMessage', (data) => {
    console.log('New Message received', data);
});


