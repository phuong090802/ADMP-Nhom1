import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useReducer } from 'react';

const initialState = {
  token: '',
  user: null,
  isAuthenticated: false,
};

export const AuthContext = createContext({
  auth: initialState,
  login: (user, token) => {},
  logout: () => {},
  setToken: (token) => {},
  setUser: (user) => {},
});

function authReducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, ...action.payload, isAuthenticated: true };
    case 'LOGOUT':
      return initialState;
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_TOKEN':
      return { ...state, token: action.payload };
    default:
      return state;
  }
}

export default function AuthContextProvider({ children }) {
  const [authState, dispatch] = useReducer(authReducer, initialState);

  function setUser(user) {
    dispatch({ type: 'SET_USER', payload: user });
  }
  function setToken(token) {
    dispatch({ type: 'SET_TOKEN', payload: token });
  }

  function login(user, token) {
    dispatch({ type: 'LOGIN', payload: { user, token } });
    AsyncStorage.setItem('user', JSON.stringify(user));
    AsyncStorage.setItem('token', token);
  }

  function logout() {
    AsyncStorage.removeItem('user');
    AsyncStorage.removeItem('token');
    dispatch({ type: 'LOGOUT' });
  }

  const value = {
    auth: authState,
    setUser,
    setToken,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
