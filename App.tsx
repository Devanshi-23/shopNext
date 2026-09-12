import React from 'react';
import{StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import SignUp from './Screens/SignUp';
import Login from './Screens/Login';
import ForgotPassword from './Screens/ForgotPassword';
import Otp from './Screens/Otp';

import MainTabs from './navigation/MainTabs';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
    <StatusBar hidden={true} />
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="MainTabs"
          screenOptions={{ headerShown: false }}>
          <Stack.Screen name="MainTabs" component={MainTabs} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="Otp" component={Otp} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    </>
  );
}

export default App;