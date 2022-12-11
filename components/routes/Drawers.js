import React from 'react';
import {
    createDrawerNavigator,
    DrawerToggleButton,
} from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';

const Drawer = createDrawerNavigator();

export const DefaultDrawer = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerPosition: 'left',
                headerShown: true,
                headerLeft: false,
                headerRight: () => <DrawerToggleButton />,
            }}>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Login" component={LoginScreen} />
        </Drawer.Navigator>
    );
};