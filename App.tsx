import React,{useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';
import { store } from './store';
import { Provider } from 'react-redux';
import AppDirectionProvider from './components/AppDirectionProvider';
import { requestNotificationsPermissionsAsync } from './helpers';

function App() {
  const isLoadingComplete = useCachedResources();

  useEffect(() => {
    requestNotificationsPermissionsAsync();
  }, [])

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <AppDirectionProvider>
          <SafeAreaProvider>
            <Navigation />
            <StatusBar />
          </SafeAreaProvider>
        </AppDirectionProvider>
      </Provider>
    );
  }
}

export default App;
