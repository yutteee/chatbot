const app = require('express')();
const http = require('http').createServer(app);
const cors = require('cors');
const bodyParser = require('body-parser');
const { ALL } = require('dns');

app.use(bodyParser.json());
app.use(cors());

// 本来はDBから呼び出すもの
const ALL_USERS = [
  {
      id: 1,
      name: "yusaku",
      image: "logo.png",
      birthday: "2002/07/12",
      roomID: "room1"
  },
  {
      id: 2,
      name: "nakamura",
      image: "logo.png",
      birthday: "2000/02/01",
      roomID: "room2"
  },
];

const postUserData = function (user_data) {
  // 本来はパスワードを使って認証をおこなう。
  const strId = user_data.id;
  const intId = Number(strId);
  const userName = user_data.name;
  const searchedUser = ALL_USERS.find(({ id, name }) => id === intId && name == userName);
  if (searchedUser.length === 0) return console.error("User not found.");
  return searchedUser;
};

app.post('/login', function(req, res){
  res.json(postUserData(req.body));
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
  socket.on('create room', function(user_name, user_id, roomID) {
    const isRoomExist = rooms.findIndex((r) => r.id == roomID)
    const user = {
      name: user_name,
      id: user_id,
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
      const user = users.find((u) => u.id == user_id);
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