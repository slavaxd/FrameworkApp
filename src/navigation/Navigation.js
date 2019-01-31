import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { Router, Stack, Scene, Modal, Tabs } from 'react-native-router-flux'

import { RootScene, Home, Register, SecondTab } from '../screens'
// import { Modal1, Modal2 } from '~/components/modals'

const TabIcon = ({ focused, title }) => {
  switch (title) {
    case 'add':
      return (
        <View style={{ borderRadius: 25, position: "absolute", justifyContent: "center", alignItems: "center", width: 50, height: 50, bottom: 15, backgroundColor: "rgb(35, 123, 160)" }}><Text style={{ bottom: 3, left: 1, color: "#fff", fontSize: 40 }}>+</Text></View>
      );
    case 'Карта':
      return <View style={{ alignItems: "center" }}>
        <Image style={{ width: 20, height: 20, marginBottom: 5 }} source={require('./icons/cityIcnActive.png')} />
        <Text style={[{ fontSize: 12 }, focused ? { color: "rgb(35, 123, 160)" } : { color: "rgb(144, 147, 151)" }]}>My city</Text>
      </View>
    case 'favourite':
      return <View style={{ alignItems: "center" }}>
        <Image style={{ width: 20, height: 20, marginBottom: 5 }} source={require('./icons/likesIcn.png')} />
        <Text style={{ fontSize: 12, color: "rgb(144, 147, 151)" }}>Favourite</Text>
      </View>
    case 'notifications':
      return <View style={{ alignItems: "center" }}>
        <Image style={{ width: 20, height: 20, marginBottom: 5 }} source={require('./icons/notifsIcn.png')} />
        <Text style={{ fontSize: 12, color: "rgb(144, 147, 151)" }}>Notifications</Text>
      </View>
    case 'profile':
        return <View style={{ alignItems: "center" }}>
        <Image style={{ width: 20, height: 20, marginBottom: 5 }} source={require('./icons/profileIcn.png')} />
        <Text style={{ fontSize: 12, color: "rgb(144, 147, 151)" }}>Profile</Text>
      </View>
  }
}

export default class Navigation extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar>
          <Tabs showLabel={false} tabBarStyle={{ height: 60 }}>
            <Scene key="first" title="Карта" icon={TabIcon} hideNavBar>
              <Scene key="rootScene" component={RootScene} title="RootScene" />
              <Scene key="home" component={Home} title="Home" />
            </Scene>
            <Scene key="secondary" title="favourite" icon={TabIcon}>
              <Scene key="second_tab" component={SecondTab} title="SecondTab" />
            </Scene>
            <Scene key="third" title="add" icon={TabIcon}>
              <Scene key="second_tab" component={SecondTab} title="SecondTab" />
            </Scene>
            <Scene key="fourth" title="notifications" icon={TabIcon}>
              <Scene key="second_tab" component={SecondTab} title="SecondTab" />
            </Scene>
            <Scene key="fiveth" title="profile" icon={TabIcon}>
              <Scene key="second_tab" component={SecondTab} title="SecondTab" />
            </Scene>
          </Tabs>
        </Scene>
      </Router>
    )
  }
}