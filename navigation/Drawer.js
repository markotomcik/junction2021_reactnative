import React from 'react'
import { Home } from '../home/Home'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { IndexPath, Layout, Drawer, DrawerItem, Text, Icon } from '@ui-kitten/components';



const { Navigator, Screen } = createDrawerNavigator();



const DrawerContent = ({ navigation, state }) => {
  return (
    <Drawer
      selectedIndex={new IndexPath(state.index)}
      onSelect={index => navigation.navigate(state.routeNames[index.row])}>
      <DrawerItem title="Home" />
      <DrawerItem title="Rewards" />
    </Drawer>
  )
}

const DrawerNavigator = () => {
  return (
    <Navigator drawerContent={props => <DrawerContent {...props}/>}>
      <Screen name = "Home" component={Home} />
      <Screen name = "Rewards" component={Home} />
    </Navigator>
  )
}

export const AppNavigator = () => (
  <NavigationContainer>
    <DrawerNavigator />
  </NavigationContainer>
);