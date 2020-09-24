import React, { ReactElement } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Preload from '../components/pages/Preload';
import SignIn from '../components/pages/SignIn';
import SignUp from '../components/pages/SingUp';
import Wall from '../components/pages/Wall';

const Stack = createStackNavigator();

export default (): ReactElement => (
  <Stack.Navigator
    initialRouteName="Preload"
    screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Preload" component={Preload} />
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen name="Wall" component={Wall} />
  </Stack.Navigator>
);
