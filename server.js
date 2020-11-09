const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on('connection', client => {
    // Listen for a new message from the front end
    client.on('new-message', msg => {
        msg.date = new Date();
        // When it happens send it to ALL connected sockets
        io.emit('new-message', msg);
    });

    client.on('win-message', msg => {
        console.log(msg);
        io.emit('win-message', msg);
    });

    client.on('player-move', square => {
        console.log(square);
        io.emit('player-move', square);
    });
});

app.use(express.static(__dirname + "/dist"));

app.get('*', (req, res) => {
    res.sendFile('/dist/index.html', { root: __dirname + "/" });
});

server.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
