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

  sendMessage(message, file) {
    console.log(message, file);
    this.socket.emit('send message', message, file);
    console.log(message, file);
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