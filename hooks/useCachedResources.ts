import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
          'maven-pro': require('../assets/fonts/MavenPro-Regular.ttf'),
          'maven-pro-medium': require('../assets/fonts/MavenPro-Medium.ttf'),
          'maven-pro-semibold': require('../assets/fonts/MavenPro-SemiBold.ttf'),
          'maven-pro-bold': require('../assets/fonts/MavenPro-Bold.ttf'),
          'maven-pro-black': require('../assets/fonts/MavenPro-Black.ttf')
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
