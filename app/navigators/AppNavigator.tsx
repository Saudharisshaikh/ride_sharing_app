import * as React from 'react';
// import {View, Text} from 'react-native';


import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Images from '../constant/Images';
import LoginScreen from '../screens/LoginScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import { StackParamList } from './types';
import SignupScreen from '../screens/SignupScreen';
import UtilsScreen from '../screens/UtilsScreen';
import RecoveryEmailScreen from '../screens/RecoveryEmailScreen';
import ChangePasswordScreen from '../screens/ChangePasswordScreen';


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

            <Stack.Screen 
             name={'Signup'}
             component={SignupScreen}
             options={{headerShown:false}}
            />

             <Stack.Screen 
             name={'Utils'}
             component={UtilsScreen}
             options={{headerShown:false}}
            />

            <Stack.Screen 
             name={'RecoveryEmail'}
             component={RecoveryEmailScreen}
             options={{headerShown:false}}
            />

             <Stack.Screen 
             name={'ChangePassword'}
             component={ChangePasswordScreen}
             options={{headerShown:false}}
            />

        </Stack.Navigator>

    )

}

export default StackNavigator;
