import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useContext } from 'react';

import Login from '../screens/guest/Login';
import Register from '../screens/guest/Register';
import HomeNavigation from './HomeNavigation';
import ForgotPassword from '../screens/guest/ForgotPassword';
import ResetPassword from '../screens/guest/ResetPassword';
import { AuthContext } from '../store/auth-context';
import VerifyOTP from '../screens/guest/VefiryOTP';
import Test from '../screens/Test';
import Profile from '../screens/Profile';

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  const authCtx = useContext(AuthContext);
  return (
    <Stack.Navigator
      // initialRouteName='HomeNavigation'
      initialRouteName='Profile'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name='HomeNavigation' component={HomeNavigation} />

      {!authCtx.auth.isAuthenticated && (
        <Stack.Group>
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Register' component={Register} />
          <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
          <Stack.Screen name='VerifyOTP' component={VerifyOTP} />
          <Stack.Screen name='ResetPassword' component={ResetPassword} />
        </Stack.Group>
      )}
      <Stack.Screen name='Profile' component={Profile} />
      <Stack.Screen name='Test' component={Test} />
    </Stack.Navigator>
  );
}
