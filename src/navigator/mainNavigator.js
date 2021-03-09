import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import Maps213179Navigator from '../features/Maps213179/navigator';
import Settings213157Navigator from '../features/Settings213157/navigator';
import Settings213142Navigator from '../features/Settings213142/navigator';
import NotificationList213141Navigator from '../features/NotificationList213141/navigator';
import Maps213140Navigator from '../features/Maps213140/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
Maps213179: { screen: Maps213179Navigator },
Settings213157: { screen: Settings213157Navigator },
Settings213142: { screen: Settings213142Navigator },
NotificationList213141: { screen: NotificationList213141Navigator },
Maps213140: { screen: Maps213140Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
