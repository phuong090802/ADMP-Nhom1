import { io } from 'socket.io-client';

// console.log(process.env.EXPO_PUBLIC_API_URL);

export const userSocket = io(process.env.EXPO_PUBLIC_API_URL + '/questions', {
  // autoConnect: false,
});

userSocket.on('connect_error', (err) => {
  console.log(err);
});
