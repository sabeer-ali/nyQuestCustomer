import * as React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import {
  LoginScreen,
  HomeScreen,
  DeviceInfoScreen,
  InstallationDetailsScreen,
  DashboardScreen,
  SupportScreen,
  SupportDetailsScreen,
  DeviceConfigScreen,
  DeviceConfigDeviceInfoScreen,
  deviceConfigCustomerDetailsScreen,
  deviceConfigStepsScreen,
  deviceConfigMenuScreen,
  serverConfigScreen,
  FAQScreen,
  MyAccountScreen,
  CustomerLoginScreen,
  CustomerRegisterScreen,
  CustomerDashboardScreen,
  BottomNavigator,
} from '../screens';
const Stack = createStackNavigator();

const StackNav = (props) => {
  console.log('props.isLoggedIn', props.isLoggedIn);
  if (props.isLoggedIn) {
    return (
      <Stack.Navigator initialRouteName="dashboard">
        <Stack.Screen
          name="bottom navigator"
          component={BottomNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="dashboard"
          component={CustomerDashboardScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="deviceConfig"
          component={DeviceConfigScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="support"
          component={SupportScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="supportDetails"
          component={SupportDetailsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FAQ"
          component={FAQScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  } else {
    return (
      <Stack.Navigator initialRouteName="customer login">
        {/* <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{ title: 'Login', headerShown: false }}
        />
  
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="deviceInfo"
          component={DeviceInfoScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="installationDetails"
          component={InstallationDetailsScreen}
          options={{ headerShown: false }}
        />
  
        <Stack.Screen
          name="support"
          component={SupportScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="supportDetails"
          component={SupportDetailsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="deviceConfig"
          component={DeviceConfigScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="deviceConfigDeviceInfo"
          component={DeviceConfigDeviceInfoScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="deviceConfigCustomerDetails"
          component={deviceConfigCustomerDetailsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="deviceConfigSteps"
          component={deviceConfigStepsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="deviceConfigMenu"
          component={deviceConfigMenuScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="serverConfig"
          component={serverConfigScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FAQ"
          component={FAQScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="myAccount"
          component={MyAccountScreen}
          options={{ headerShown: false }}
        /> */}

        {/* Customer App */}
        <Stack.Screen
          name="customer login"
          component={CustomerLoginScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="customer register"
          component={CustomerRegisterScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="bottom navigator"
          component={BottomNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  }
};

export default StackNav;
