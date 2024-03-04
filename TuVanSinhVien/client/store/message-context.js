import { createContext, useState } from 'react';

import { isNotEmpty } from '../utils/validation';

export const MessageContext = createContext({
  message: '',
  setMessage: (message) => {},
  sendMessage: () => {},
});

export default function MessageProvider({ children }) {
  const [storedMessage, setStoredMessage] = useState('');

  function setMessage(enteredText) {
    setStoredMessage(enteredText);
  }

  function sendMessage() {
    if (isNotEmpty(storedMessage)) {
      console.log(storedMessage);
    }
  }

  const value = {
    message: storedMessage,
    setMessage,
    sendMessage,
  };

  return (
    <MessageContext.Provider value={value}>{children}</MessageContext.Provider>
  );
}
