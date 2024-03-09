import { View, Text } from 'react-native'
import React from 'react'
import MainScreen from './src/coomponents/MainScreen';
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux';
import { store } from './src/coomponents/redux/Store';
import { NativeBaseProvider } from 'native-base';

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Provider store={store}>
          <View style={{ flex: 1 }}>
            <MainScreen />
          </View>
        </Provider>
      </NavigationContainer>
    </NativeBaseProvider>
  )
}

export default App