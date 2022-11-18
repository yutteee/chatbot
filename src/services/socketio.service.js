import { io } from 'socket.io-client';

class SocketioService {
  socket;
  constructor() {}

  setupSocketConnection() {
    this.socket = io(process.env.VUE_APP_SOCKET_ENDPOINT);
    console.log(`Connecting socket...`);
  }

  createRoom(user_name, user_id, roomID) {
    this.socket.emit("create", user_name, user_id, roomID);
  }

  subscribeToMessages(cb) {
    if (!this.socket) return(true);
    this.socket.on('message', msg => {
      console.log('Room event received!');
      return cb(null, msg);
    });
  }
  
  sendMessage(message) {
    this.socket.emit('chat message', message);
  }

  getMessage() {
    this.socket.on('chat message',function(msg){
      console.log(msg)
    });
  }
  
  disconnect() {
    if(this.socket) {
      this.socket.disconnect();
    }
  }
}

export default new SocketioService();