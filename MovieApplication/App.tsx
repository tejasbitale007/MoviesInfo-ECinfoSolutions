import { View, Text } from 'react-native'
import React from 'react'
import MainScreen from './src/coomponents/MainScreen';
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux';
import { store } from './src/coomponents/redux/Store';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <MainScreen />
        </View>
      </Provider>
    </NavigationContainer>
  )
}

export default App