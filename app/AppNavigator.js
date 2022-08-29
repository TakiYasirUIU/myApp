import React from 'react';
import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
import DishDetailScreen from './screens/DishDetailScreen';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerRouter } from '@react-navigation/native';

const Drawer = createDrawerNavigator();
const AppNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name ="Home" component={HomeScreen} />
            <Drawer.Screen name ="Menu" component={MenuScreen} />
        </Drawer.Navigator>
    )
}

export default AppNavigator;