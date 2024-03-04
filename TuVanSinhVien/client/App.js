import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { View, StyleSheet } from 'react-native';
import { useCallback, useEffect, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';

import RootNavigation from './navigation/RootNavigation';
import AuthContextProvider, { AuthContext } from './store/auth-context';

SplashScreen.preventAutoHideAsync();
function Root() {
  const authCtx = useContext(AuthContext);
  useEffect(() => {
    async function fetchData() {
      const storedToken = await AsyncStorage.getItem('token');
      const storedUser = await AsyncStorage.getItem('user');
      if (storedToken) {
        authCtx.setToken(storedToken);
      }
      if (storedUser) {
        authCtx.setToken(JSON.parse(storedUser));
      }
    }
    fetchData();
  }, []);

  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
}


export default function App() {

  const [fontsLoaded, fontsError] = useFonts({
    'Bungee-Regular': require('./assets/fonts/Bungee-Regular.ttf'),
    'Bahnschrift-1': require('./assets/fonts/Bahnschrift-1.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontsError) {
      await new Promise(resolve => setTimeout(resolve, 800))
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontsError]);

  if (!fontsLoaded && !fontsError) {
    return null;
  }

  return (
    <View style={styles.root} onLayout={onLayoutRootView}>
      <StatusBar style='auto' />
      <SafeAreaProvider>
        <AuthContextProvider>
          <Root />
        </AuthContextProvider>
      </SafeAreaProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
