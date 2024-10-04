//tcp server program
const net = require('net');

const server = net.createServer((socket) => {
    console.log('Client connected.');

    socket.on('data', (data) => {
        console.log('Received from client: ' + data.toString());

        socket.write('Hello from server!');
    });

    socket.on('end', () => {
        console.log('Client disconnected.');
    });
});

server.listen(3000, () => {
    console.log('TCP Server listening on port 3000...');
});
/*output
TCP Server listening on port 3000...
Client connected.
Received from client: Hello from client!
Client disconnected.*/


//TCP Client program

const net = require('net');

const client = net.createConnection({ port: 3000 }, () => {
    console.log('Connected to server.');

    client.write('Hello from client!');
});

client.on('data', (data) => {
    console.log('Received from server: ' + data.toString());

    client.end();
});

client.on('end', () => {
    console.log('Disconnected from server.');
});

/*output
Connected to server.
Received from server: Hello from server!
Disconnected from server.*/

