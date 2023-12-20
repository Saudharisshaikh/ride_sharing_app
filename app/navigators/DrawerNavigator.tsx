import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import DrawerContent from './DrawerContent';

import Group from '../screens/Group';
import MyRideScreen from './MyRideScreen';
import MyPaymentScreen from './MyPaymentScreen';
import MyChatScreen from './MyChatScreen';
import MyVehiclesScreen from './MyVehiclesScreen';
 // Replace this with your actual screen components

 

 

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName='Home'
     drawerContent={props=> <DrawerContent {...props}/>}
    >
      {/* Define your drawer screens here */}
      <Drawer.Screen name='Home' component={HomeScreen} />
    
      <Drawer.Screen name='Group' component={Group} />
      <Drawer.Screen name='MyRide' component={MyRideScreen} />
      <Drawer.Screen name='MyPayments' component={MyPaymentScreen} />
      <Drawer.Screen name='MyVehicles' component={MyVehiclesScreen} />
      <Drawer.Screen name='MyChat' component={MyChatScreen} />

      
      {/* ... */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
