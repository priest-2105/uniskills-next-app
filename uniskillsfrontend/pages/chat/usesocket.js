import { useEffect } from 'react';
import { io } from 'socket.io-client';


const socket = io('http://localhost:3001', {
  query: {
    codec: 'userCodec',  
  },
});

const useSocket = (event, callback) => {
  useEffect(() => {
    if (event && typeof callback === 'function') {
      socket.on(event, callback);
    }

    return () => {
      if (event && typeof callback === 'function') {
        socket.off(event, callback);
      }
    };
  }, [event, callback]);
};






export { useSocket, socket };
