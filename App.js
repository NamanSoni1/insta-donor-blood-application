import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/Screen/login';
import Splash from './src/Screen/splash';
import Register from './src/Screen/register';
import Home from './src/Screen/home';
import RequestBlood from './src/Screen/requestBlood';
import DonateBlood from './src/Screen/donateBlood';
import DonorDetails from './src/Screen/donorDetails';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="RequestBlood" component={RequestBlood} />
        <Stack.Screen name="DonateBlood" component={DonateBlood} />
        <Stack.Screen name="DonorDetails" component={DonorDetails} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;