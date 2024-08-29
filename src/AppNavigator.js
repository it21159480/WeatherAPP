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

// const Top = createMaterialTopTabNavigator()
// const Stack = createNativeStackNavigator()
// export function TopNavigation() {
//     return (
//         <Top.Navigator >
//             <Top.Screen name='Current' component={Current} />
//             <Top.Screen name='Forecast' component={Forcast} />
//         </Top.Navigator>
//     );
// }

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Current' component={Current} />
                <Tab.Screen name='Forecast' component={Forcast} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator