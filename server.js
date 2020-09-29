const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const compression = require('compression');
const enforce = require('express-sslify');
const socketIO = require('socket.io');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
const http = require('http').createServer(app);

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(enforce.HTTPS({ trustProtoHeader: true }));
app.use(cors());

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

http.listen(port, error => {
    if(error) throw error;
    console.log('Server running on port ' + port);
});

const io = socketIO.listen(http);
io.on('connection', function (socket) {
    socket.on('join', function ({ classroomId, currentUserId}) {
        console.log({currentUserId});
        socket.join(classroomId);
        io.to(classroomId).emit('new-peer', currentUserId);  
    });
    socket.on('signal', (data) => {
        console.log(data)
        io.to(data.classroomId).emit('desc', data);        
    });
});

app.get('/service-worker.js', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'service-worker.js'));
});