import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import MenuList from '../MenuList/MenuList';
//import MenuItem from '../MenuItem/MenuItem';
import firebase from '../../Firebase'

export default class MenuPage extends Component {
  render() {
    return (
      <View style={styles.MenuPageContainer}>
        <Image style={styles.img} source={require('../../assets/menuPage.png')} />
        <ScrollView>
          <View style={styles.MenuPageHeader}>
            <TouchableOpacity>
              <Text style={styles.MenuPageTitle} onPress={this.registerEmail}>Напої</Text>
            </TouchableOpacity>

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
    backgroundColor: 'white'
  },
  MenuPageHeader: {
    flexDirection: "row",
    marginTop: 30,
    alignItems: "flex-end"
  },
  MenuPageTitle: {
    color: "#585754",
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
