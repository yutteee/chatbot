const app = require('express')();
const http = require('http').createServer(app);
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());

let userData = {
  room: "",
  name: "",
  id: 0,
  message: "",
};

const postUserData = function (req, res) {
  userData.name = req.body.name;
  userData.id = req.body.id;
};

app.post('/user', function(req, res){
  res.json(postUserData(req, res));
})


const io = require("socket.io")(http, {
	cors: {
		origins: ["http://localhost:8080"],
        credentials: true
	},
  maxHttpBufferSize: 1e8,
  pingTimeout: 60000
});

const rooms = [];
const users = [];

io.on('connection', (socket) => {
  socket.on('create room', function(user_name, roomID) {
    const isRoomExist = rooms.findIndex((r) => r.id == roomID)
    const user = {
      name: user_name,
      id: socket.id,
      roomID
    };
    const room = {
      id: roomID,
      users: [user],
      messages: []
    };
    const empty = -1;
    if(isRoomExist == empty) {
      users.push(user);
      rooms.push(room);
      socket.join(roomID);
      console.log(users);
    } else {
      // Currently there is room for more than one person to enter the room.
      users.push(user);
      rooms[isRoomExist].users.push(user);
      socket.join(rooms[isRoomExist].id);
      console.log(users);
    };
    // get chat history
    const roomIndex = rooms.findIndex((r) => r.id == user.roomID);
    const chatRoom = rooms[roomIndex];
    io.in(chatRoom.id).emit('get message', chatRoom);

    socket.on('send message', function(message, file, fileTypes, fileNames) {
      console.log("メッセージを受け取ったよ");
      const user = users.find((u) => u.id == socket.id);
      const roomIndex = rooms.findIndex((r) => r.id == user.roomID);
      const room = rooms[roomIndex];

      // send file
      for(let i = 0; i < file.length; i++) {
        rooms[roomIndex].messages.push({
          name: user.name,
          text: '',
          file: file[i],
          fileType: fileTypes[i],
          fileName: fileNames[i]
        });
        console.log(file);
      };
      // send message
      if(message != ''){
        rooms[roomIndex].messages.push({
          name: user.name,
          text: message,
          file: {},
          fileType: '',
          fileName: ''
        });
      };

      console.log(room);
      io.in(room.id).emit('get message', room);
    })
  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});