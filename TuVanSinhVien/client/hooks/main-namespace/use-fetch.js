import { useState, useEffect } from 'react';
import { userSocket as socket } from '../../configs/socket';

export function useFetch({ emitEvent, payload, listenEvent }) {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [data, setData] = useState([]);

  socket.emit(emitEvent, payload);


  if (!isConnected) {
    socket.connect();
  }

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnected() {
      setIsConnected(false);
    }

    // function onFetchEvent(value) {
    //   setData(value);
    // }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnected);

    socket.on(listenEvent, (payload) => {
      console.log(payload);
    });

    // return () => {
      // socket.off('connect', onConnect);
      // socket.off('disconnect', onDisconnected);
      // socket.off(listenEvent, onFetchEvent);
    // };
  }, []);

  return {
    isConnected,
    data,
    setData,
  };
}
