import { io } from 'socket.io-client';

class SocketioService {
  socket;
  constructor() {}

  setupSocketConnection() {
    this.socket = io(process.env.VUE_APP_SOCKET_ENDPOINT);
    console.log(`Connecting socket...`);
  }

  createRoom(user_name, roomID) {
    this.socket.emit("create room", user_name, roomID);
  }

  sendMessage(message, file, fileTypes) {
    this.socket.emit('send message', message, file, fileTypes);
  }

  getMessage(callback) {
    this.socket.on('get message',function(room){
      // const convertedMessages = room.messages.map((message) => {
      //   if(message.file !== []) {
      //     const buffer = new Uint8Array(message.file);
      //     console.log(buffer);
      //     const fileString= String.fromCharCode.apply(null, buffer);
      //     console.log(fileString);
      //     const obj = JSON.parse(fileString);
      //     message.file = obj;
      //     return message;
      //   } else {
      //     return message;
      //   }
      // })
      // console.log(convertedMessages);
      return callback(null, room.messages);
      // return callback(null, convertedMessages);
    });
  }
  
  disconnect() {
    if(this.socket) {
      this.socket.disconnect();
    }
  }
}

export default new SocketioService();