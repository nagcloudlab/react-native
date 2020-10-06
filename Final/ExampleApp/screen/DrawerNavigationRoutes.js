
//Import React
import React from 'react';

//Import Navigators
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

//Import External Screens
import HomeScreen from './drawer-screens/HomeScreen';
import SettingsScreen from './drawer-screens/SettingsScreen';
import CustomSidebarMenu from './components/CustomSidebarMenu';
import NavigationDrawerHeader from './components/NavigationDrawerHeader';

const FirstActivity_StackNavigator = createStackNavigator({
    First: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Home Screen',
            headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#307ecc',
            },
            headerTintColor: '#fff',
        }),
    },
});

const SecondActivity_StackNavigator = createStackNavigator({
    First: {
        screen: SettingsScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Setting Screen',
            headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#307ecc',
            },
            headerTintColor: '#fff',
        }),
    },
});

const DrawerNavigatorRoutes = createDrawerNavigator(
    {
        HomeScreen: {
            screen: FirstActivity_StackNavigator,
            navigationOptions: {
                drawerLabel: 'Home Screen',
            },
        },
        SettingsScreen: {
            screen: SecondActivity_StackNavigator,
            navigationOptions: {
                drawerLabel: 'Setting Screen',
            },
        },
    },
    {
        contentComponent: CustomSidebarMenu,
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle',
    }
);
export default DrawerNavigatorRoutes;