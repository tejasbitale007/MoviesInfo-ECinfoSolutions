import { View, Text } from 'react-native'
import React from 'react';
import screenConstant from './screenConstant';
import HomeScreen from '../modules/HomeScreen/HomeScreen';
import FavouriteScreen from '../modules/FavouriteScreen/FavouriteScreen';
import ProfileScreen from '../modules/ProfileScreen/ProfileScreen';
import MovieDetailsScreen from '../modules/MovieDetailsScreen/MovieDetailsScreen';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabs from './BottomTabs';

const Stack = createStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown:false,
            headerBackTitleVisible:false
        }}>
            {/* <Stack.Screen name={'Login Screen'} component={HomeScreen}/> */}
            <Stack.Screen name={'BottomTabs Screen'} component={BottomTabs}></Stack.Screen>
            <Stack.Screen name={'Register Screen'} component={ProfileScreen}></Stack.Screen>
            <Stack.Screen name={'Profile Screen'} component={ProfileScreen}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default AppStack