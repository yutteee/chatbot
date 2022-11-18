import { io } from 'socket.io-client';

class SocketioService {
  socket;
  constructor() {}

  setupSocketConnection() {
    this.socket = io(process.env.VUE_APP_SOCKET_ENDPOINT);
    console.log(`Connecting socket...`);
  }

  createRoom(user_name, roomID) {
    this.socket.emit("create", user_name, roomID);
  }

  sendMessage(message) {
    this.socket.emit('chat message', message);
  }

  getMessage(cb) {
    this.socket.on('get message',function(room){
      return cb(null, room.messages);
    });
  }
  
  disconnect() {
    if(this.socket) {
      this.socket.disconnect();
    }
  }
}

export default new SocketioService();