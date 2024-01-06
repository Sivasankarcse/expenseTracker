import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS, theme } from '../../constants';
import { TabBarIcon } from '../components/TabBarIcon';
import TrackListScreen from './TrackListScreen';
import StatsScreen from './StatsScreen';
import AccountsScreen from './AccountsScreen';
import SettingsScreen from './SettingsScreen';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
    return (
        <Tab.Navigator
        // screenOptions={{
        //   tabBarStyle: {
        //     backgroundColor: theme.colors.card
        //   }
        // }}
        >
            <Tab.Screen
                options={{
                    title: "Date",
                    tabBarActiveTintColor: COLORS?.blue,
                    tabBarInactiveBackgroundColor: theme.colors.card,
                    tabBarIcon: (props) => <TabBarIcon {...props} name='notebook' type='date' />
                }}
                name='TrackListScreen'
                component={TrackListScreen}
            />
            <Tab.Screen
                options={{
                    title: "Stats",
                    tabBarActiveTintColor: COLORS?.blue,
                    tabBarInactiveBackgroundColor: theme.colors.card,
                    tabBarIcon: (props) => <TabBarIcon {...props} name='stats-chart-outline' type='stats' />
                }}
                name='StatsScreen'
                component={StatsScreen} />
            <Tab.Screen
                options={{
                    title: "Accounts",
                    tabBarActiveTintColor: COLORS?.blue,
                    tabBarInactiveBackgroundColor: theme.colors.card,
                    tabBarIcon: (props) => <TabBarIcon {...props} name='switch-account' type='accounts' />
                }}
                name='AccountsScreen'
                component={AccountsScreen} />
            <Tab.Screen
                options={{
                    title: "Settings",
                    tabBarActiveTintColor: COLORS?.blue,
                    tabBarInactiveBackgroundColor: theme.colors.card,
                    tabBarIcon: (props) => <TabBarIcon {...props} name="settings" type='settings' />
                }}
                name='SettingsScreen'
                component={SettingsScreen} />
        </Tab.Navigator>
    )
}

export default HomeScreen