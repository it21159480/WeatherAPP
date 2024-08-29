import { View, Text } from 'react-native'
import React from 'react'
// import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Current from './screens/Current'
import Forcast from './screens/Forcast'
const Tab = createBottomTabNavigator();

const Top = createMaterialTopTabNavigator()
const Stack = createNativeStackNavigator()
export function WeatherApp() {
    return (
        <Top.Navigator >
            <Top.Screen name='Current' component={Current} />
            <Top.Screen name='Forecast' component={Forcast} />
        </Top.Navigator>
    );
}

const AppNavigator = () => {
    return (
        <NavigationContainer>
          
            <Stack.Navigator >
                <Stack.Screen options={{
                    title: 'Weather App',
                    headerTitleAlign: 'center',
                }} name='WeatherApp' component={WeatherApp} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator