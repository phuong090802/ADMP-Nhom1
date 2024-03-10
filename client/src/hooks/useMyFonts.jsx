import * as Font from "expo-font"
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen"

const useMyFonts = () => {
    const [fontsLoaded, fontsError] = Font.useFonts({
        'BahnschriftBold': require('../../assets/font/BahnschriftBold.ttf'),
        'BahnschriftRegular': require('../../assets/font/BahnschriftRegular.ttf'),
        'Bungee': require('../../assets/font/Bungee.ttf'),
    })

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontsError) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontsError]);

    // if (!fontsLoaded && !fontsError) {
    //     return null;
    // }

    return { fontsLoaded, fontsError, onLayoutRootView }
}

export default useMyFonts

// const [fontsLoaded, fontsError] = useFonts({
//     'Bungee-Regular': require('./assets/fonts/Bungee-Regular.ttf'),
//     'Bahnschrift-1': require('./assets/fonts/Bahnschrift-1.ttf'),
//   });

//   const onLayoutRootView = useCallback(async () => {
//     if (fontsLoaded || fontsError) {
//       await SplashScreen.hideAsync();
//     }
//   }, [fontsLoaded, fontsError]);

//   if (!fontsLoaded && !fontsError) {
//     return null;
//   }

//   <View style={styles.root} onLayout={onLayoutRootView}>
//       <StatusBar style='auto' />
//       <SafeAreaProvider>
//         <AuthContextProvider>
//           <Root />
//         </AuthContextProvider>
//       </SafeAreaProvider>
//     </View>