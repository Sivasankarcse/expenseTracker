import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { theme } from './constants';
import CategoriesScreen from './src/screens/CategoriesScreen';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer theme={theme}>
      <StatusBar style='light' />
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          options={{headerShown: false}}
          component={HomeScreen}
        />
        <Stack.Screen name='Categories' component={CategoriesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
