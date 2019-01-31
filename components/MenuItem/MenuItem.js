import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';


const MenuItem = props => (
  <View style={styles.MenuItemContainer}>
    <View style={styles.MenuItemContent}>
      <Image style={styles.image} source={{ uri: 'https://pngimage.net/wp-content/uploads/2018/06/hookah-icon-png-6.png' }} />
      <View>
        <View style={styles.price}>
          <Text style={styles.menuItemTitle}>Кальян</Text>
          <Text style={styles.menuPrice} >150 грн</Text>
        </View>
        <View>
          <Text style={styles.MenuPageText1}>skd siuaiuvs  auwaeiusbu iuas avuiaerh uiwra jkuiw ua y aeur eaiur  </Text>
        </View>
        <TouchableOpacity>
          <View style={styles.addButton}>
           {/* <Image style={styles.image} source={require('../../assets/images/shopping-cart.png')} /> */}
            <Text style={styles.buttonText}>  Замовити</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>

  </View>
)

const styles = StyleSheet.create({
  MenuItemContainer: {
    width: "90%",
    backgroundColor: '#fefefe',
    height: 115,
    marginTop: 20,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: .2

  },
  image: {
    width: 65,
    height: 65,
    paddingTop: 5,

  },
  menuItemTitle: {
    fontSize: 20,
    fontWeight: "700",

  },
  MenuPageText1: {
    color: "#767676",
    marginBottom: 2,
    width: 240
  },
  MenuItemContent: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "space-around"
  },
  menuPrice: {
    color: "#7eafe8",
    marginRight: 5,
    fontWeight: "700",
  },
  price: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 7,
    paddingBottom: 7
  },
  addButton: {
    width: 100,
    height: 25,
    backgroundColor: "#7eafe8",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 4
  },
  buttonText: {
    color: "white"
  }

})

export default MenuItem;