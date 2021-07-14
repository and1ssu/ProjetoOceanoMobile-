
import Dashboard from './Dashboard';
import Pedidos from './Pedidos';
import Estoque from './Estoque';


import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';



const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="Pedidos" component={Pedidos} />
        <Drawer.Screen name="Estoque" component={Estoque} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}