import React from 'react';
import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
import DishDetailScreen from './screens/DishDetailScreen';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerRouter } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const MenuStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Menu" component={MenuScreen} />
            <Stack.Screen name="Dish Detail" component={DishDetailScreen} />
        </Stack.Navigator>
    )
}

const AppNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name ="Home" component={HomeScreen} />
            <Drawer.Screen name ="Menu" component={MenuStack} />
        </Drawer.Navigator>
    )
}

export default AppNavigator;