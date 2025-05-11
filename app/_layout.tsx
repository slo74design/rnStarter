import { useFonts } from "expo-font";
import { Slot, SplashScreen } from 'expo-router';
import { useEffect } from "react";
import "./global.css";

SplashScreen.preventAutoHideAsync(); // previene la Splash se quite hasta q no se cargan las fonts

const RootLayout = () => {

    const [fontsLoaded, error] = useFonts({
        "WorkSans-Black": require("../assets/fonts/WorkSans-Black.ttf"), 
        "WorkSans-Bold": require("../assets/fonts/WorkSans-Bold.ttf"), 
        "WorkSans-Regular": require("../assets/fonts/WorkSans-Regular.ttf"), 
        "WorkSans-Light": require("../assets/fonts/WorkSans-Light.ttf"), 
    })

    useEffect(() => {

        if(error) throw error;
        if(fontsLoaded) SplashScreen.hideAsync();

    }, [fontsLoaded, error])

    // no vamos a mostrar nada hasta q las fonts están cargadas
    if(!fontsLoaded && !error) return null

  return (
    <Slot />
  )
}

export default RootLayout