import io from 'socket.io-client';

const socket = io('https://chat-service-kzyq.onrender.com');

export default socket;