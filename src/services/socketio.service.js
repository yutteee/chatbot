import { io } from 'socket.io-client';

class SocketioService {
  socket;
  constructor() {}

  setupSocketConnection() {
    this.socket = io(process.env.VUE_APP_SOCKET_ENDPOINT);
    console.log(`Connecting socket...`);
  }

  createRoom(user_name, user_id, roomID) {
    this.socket.emit("create room", user_name, user_id, roomID);
  }

  sendMessage(message, file, fileTypes, fileNames) {
    this.socket.emit('send message', message, file, fileTypes, fileNames);
    console.log("ファイルだよ");
    console.log(file);
  }

  getMessage(callback) {
    this.socket.on('get message',function(room){
      return callback(null, room.messages);
    });
  }
  
  disconnect() {
    if(this.socket) {
      this.socket.disconnect();
    }
  }
}

export default new SocketioService();