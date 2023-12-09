import * as React from 'react';
// import {View, Text} from 'react-native';


import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Images from '../constant/Images';
import LoginScreen from '../screens/LoginScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import { StackParamList } from './types';

const Stack = createNativeStackNavigator<StackParamList>();

  const StackNavigator =()=>{

    return(
        <Stack.Navigator
         initialRouteName='Welcome'
         screenOptions={{
            animation:"slide_from_right"
         }}
        >
            <Stack.Screen 
             name={'Welcome'}
             component={WelcomeScreen}
             options={{headerShown:false}}
            />
            <Stack.Screen 
             name={'Login'}
             component={LoginScreen}
             options={{headerShown:false}}
            />



        </Stack.Navigator>

    )

}

export default StackNavigator;
