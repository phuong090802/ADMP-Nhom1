import 'react-native-get-random-values';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppHome from './src/screens/common/app-home';
import ForgotPassword from './src/screens/common/forgot-password';
import Login from './src/screens/common/login';
import Register from './src/screens/common/register';
import temp from './src/screens/temp';
import Store from './src/store/Store';

const Stack = createNativeStackNavigator();

export default function App() {
  console.log('App is running');

  const [fontsLoaded, fontsError] = useFonts({
    BahnschriftBold: require('./assets/fonts/BahnschriftBold.ttf'),
    BahnschriftRegular: require('./assets/fonts/BahnschriftRegular.ttf'),
    Bungee: require('./assets/fonts/Bungee.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontsError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontsError]);

  if (!fontsLoaded && !fontsError) {
    return null;
  }

  return (
    <View style={style.root} onLayoutRootView={onLayoutRootView}>
      <Store>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName='AppHome'
            // initialRouteName="Temp"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Register' component={Register} />
            <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
            <Stack.Screen name='AppHome' component={AppHome} />
            <Stack.Screen name='Temp' component={temp} />
          </Stack.Navigator>
        </NavigationContainer>
      </Store>
    </View>
  );
}

const style = StyleSheet.create({
  root: {
    flex: 1,
  },
});
