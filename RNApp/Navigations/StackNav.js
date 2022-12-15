import React, {useEffect, useState} from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import Signin from '../Screens/Signin';
import SignUp from '../Screens/SignUp';
import Home from '../Screens/Home';
import {createStackNavigator} from '@react-navigation/stack';
import {AsyncStorage} from 'react-native';

const Stack = createStackNavigator();

function Stacknav(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}
      defaultStatus="closed">
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={SignUp} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
function Stacknav2(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}
      defaultStatus="closed">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={SignUp} />
    </Stack.Navigator>
  );
}

export {Stacknav, Stacknav2};
