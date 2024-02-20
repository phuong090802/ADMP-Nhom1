import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { View, StyleSheet } from 'react-native';

import RootNavigation from './navigation/RootNavigation';
import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';

SplashScreen.preventAutoHideAsync();
export default function App() {
  const [fontsLoaded, fontsError] = useFonts({
    'Bungee-Regular': require('./assets/fonts/Bungee-Regular.ttf'),
    'Bahnschrift-1': require('./assets/fonts/Bahnschrift-1.ttf'),
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
    <View style={styles.root} onLayout={onLayoutRootView}>
      <StatusBar style='auto' />
      <SafeAreaProvider>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </SafeAreaProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
