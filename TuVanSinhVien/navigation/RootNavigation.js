import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/Login';
import Register from '../screens/Register';
import HomeNavigation from './HomeNavigation';

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <Stack.Navigator initialRouteName='Register'>
      <Stack.Screen
        name='HomeNavigation'
        component={HomeNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='Login'
        component={Login}
        options={{
          title: 'Đăng nhập',
        }}
      />
      <Stack.Screen
        name='Register'
        component={Register}
        options={{
          headerShown: false,
          title: 'Đăng ký',
        }}
      />
    </Stack.Navigator>
  );
}
