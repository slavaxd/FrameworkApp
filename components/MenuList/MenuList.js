import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import MenuItem from '../MenuItem/MenuItem';
export default class MenuList extends Component {
  render() {
    return (
      <View style={styles.MenuPageList}>
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  MenuPageList: {
    alignItems: "center"
  },
})


