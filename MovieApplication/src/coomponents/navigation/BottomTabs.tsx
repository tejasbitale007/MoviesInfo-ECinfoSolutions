import { View, Text } from 'react-native'
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../modules/HomeScreen/HomeScreen';
import FavouriteScreen from '../modules/FavouriteScreen/FavouriteScreen';
import ProfileScreen from '../modules/ProfileScreen/ProfileScreen';
import LoginScreen from '../modules/LoginScreen/LoginScreen';
import IconComponent from '../atoms/IconComponent';
import iconConstant from '../iconConstant';
const Tab = createBottomTabNavigator();
const BottomTabs = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name='Home' component={HomeScreen} options={{
                tabBarIcon: () => {
                    return (
                        <IconComponent iconName={iconConstant.discover} containerStyle={{}} size={20} viewBox='0 0 20 20' />
                    )
                }
            }} />
            <Tab.Screen name='Favourite' component={FavouriteScreen} options={{
                tabBarIcon: () => {
                    return (
                        <IconComponent iconName={iconConstant.heart} containerStyle={{}} size={20} />
                    )
                }
            }} />
            <Tab.Screen name='Profile' component={ProfileScreen} options={{
                tabBarIcon:()=>{
                    return(
                        <IconComponent iconName={iconConstant.userCircle} containerStyle={{}} size={20}/>
                    )
                }
            }} />
            {false && <Tab.Screen name='Login Screen' component={LoginScreen} />}
        </Tab.Navigator>
    )
}

export default BottomTabs