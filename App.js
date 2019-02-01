import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router, Stack, Scene, Tabs } from 'react-native-router-flux'
import LoginPage from './screens/LoginPage/LoginPage'
import MenuPage from './screens/MenuPage/MenuPage'
import Cart from './screens/Cart/Cart'
export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Tabs key="root" >
          <Scene key="login" component={LoginPage} title="Login" hideNavBar/>
          <Scene key="MenuPage" component={MenuPage} title="MenuPage" hideNavBar/>
           <Scene key="Cart" component={Cart} title="Cart" hideNavBar/>
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
