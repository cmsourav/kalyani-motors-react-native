import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home/HomeScreen';
import ProjectScreen from '../screens/home/ProjectScreen';


const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
                name='HomeScreen'
                component={HomeScreen} />
            <Stack.Screen
                name='Project'
                component={ProjectScreen} />
        </Stack.Navigator>
    )
}

export default HomeStack