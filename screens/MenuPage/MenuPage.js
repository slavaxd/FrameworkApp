import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import MenuList from '../MenuList/MenuList';
//import MenuItem from '../MenuItem/MenuItem';

export default class MenuPage extends Component {
  render() {
    return (
      <View style={styles.MenuPageContainer}>
        <Image style={styles.img} source={require('../../assets/Fon.png')} />
        <ScrollView>
          <View style={styles.MenuPageHeader}>
            <Text style={styles.MenuPageTitle} >Меню кальянів</Text>
            <Text style={styles.MenuPageText1}>10 видів</Text>
          </View>
          <MenuList />
          <View style={styles.MenuPageHeader}>
            <Text style={styles.MenuPageTitle} >Hookah menu</Text>
            <Text style={styles.MenuPageText1}>10 items</Text>
          </View>
          <MenuList />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  MenuPageContainer: {
    flex: 1,
    backgroundColor: '#f9fafb'
  },
  MenuPageHeader: {
    flexDirection: "row",
    marginTop: 30,
    alignItems: "flex-end"
  },
  MenuPageTitle: {
    fontSize: 28,
    fontWeight: "700",
    paddingLeft: 30,
    paddingRight: 5
  },
  MenuPageText1: {
    color: "#767676",
    marginBottom: 2
  },
  // MenuPageList: {
  //   alignItems: "center"
  // },
  img: {
    width: "100%",
    height: 100
  }
})
