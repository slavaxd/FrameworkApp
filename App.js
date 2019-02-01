import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router, Stack, Scene, Tabs } from 'react-native-router-flux'
import LoginPage from './screens/LoginPage/LoginPage'
import MenuPage from './screens/MenuPage/MenuPage'
import Cart from './screens/Cart/Cart'
import Map from './screens/Map/Map'
import Registration from './screens/Registration/Registration'

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Tabs key="root">
          <Scene key="Registration" component={Registration} title="Registration"/>
          <Scene key="login" component={LoginPage} title="Login"/>
          <Scene key="Map" component={Map} title="Map"/>
          <Scene key="MenuPage" component={MenuPage} title="MenuPage"/>
          <Scene key="Cart" component={Cart} title="Cart"/>
      </Tabs>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
