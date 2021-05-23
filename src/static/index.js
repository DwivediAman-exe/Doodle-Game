const socket = io('/');

socket.on('hello', () => console.log('somebody said hello'))