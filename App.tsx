import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TrackListScreen from './src/screens/TrackListScreen';
import StatsScreen from './src/screens/StatsScreen';
import AccountsScreen from './src/screens/AccountsScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import { theme, icons, COLORS } from './constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { TabBarIcon } from './src/components/TabBarIcon';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer theme={theme}>
      <StatusBar style='light' />
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
    </NavigationContainer>
  );
}
