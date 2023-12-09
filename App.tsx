import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from './app/navigators/AppNavigator'


export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator/>
      
    </NavigationContainer>
  )
}