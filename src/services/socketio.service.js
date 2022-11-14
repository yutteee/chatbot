import { io } from 'socket.io-client';

class SocketioService {
    socket;
    constructor() {}

    setupSocketConnection(token) {
        this.socket = io(process.env.VUE_APP_SOCKET_ENDPOINT);
        this.socket.emit('my message', 'Hello there from Vue.');
        this.socket.on('my broadcast', (data) => {
            console.log(data);
        });
        this.socket = io(process.env.VUE_APP_SOCKET_ENDPOINT, {
            auth: {
                token,
            }
        });
        console.log(`Connecting socket...`);
    }

    disconnect() {
        if (this.socket) {
            this.socket.disconnect();
        }
    }
}

export default new SocketioService();