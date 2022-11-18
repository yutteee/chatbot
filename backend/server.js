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
});

const rooms = [];
const users = [];

io.on('connection', (socket) => {
  // room作成
  socket.on('create', function(user_name, roomID) {
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
    if(isRoomExist == -1) {
      users.push(user);
      rooms.push(room);
  
      socket.join(roomID);
      console.log(users);
    } else {
      users.push(user);
      rooms[isRoomExist].users.push(user);
      socket.join(rooms[isRoomExist].id);
      console.log(users);
    };
    // メッセージを受け取る
    socket.on('chat message', function(msg) {
      // socket.idからuser情報、どのroomにいるかを取得
      const user = users.find((u) => u.id == socket.id);
      const roomIndex = rooms.findIndex((r) => r.id == user.roomID);
      const room = rooms[roomIndex];
      // メッセージを保存
      rooms[roomIndex].messages.unshift({
        userName: user.name,
        message: msg
      });
      console.log(room);
      // 受け取ったメーセージを返す
      io.in(room.id).emit('get message', room);
    })
  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});