import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';


const MenuItem = props => (
  <View style={styles.MenuItemContainer}>
    <View style={styles.MenuItemContent}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: 'https://pngimage.net/wp-content/uploads/2018/06/hookah-icon-png-6.png' }} />
      </View>

      <View style={styles.Content}>
        <View style={styles.price}>
          <Text style={styles.menuItemTitle}>Американо</Text>
          <Text style={styles.menuPrice} >21 грн</Text>
        </View>
        <View style={styles.volume}>
          <Text style={styles.MenuPageText1}>200 ml</Text>
          <TouchableOpacity>
            <View style={styles.addButton}>
              <Text style={styles.buttonText}>  Замовити</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>


    </View>

  </View>
)

const styles = StyleSheet.create({
  MenuItemContainer: {
    width: 330,
    backgroundColor: '#fefefe',
    height: 90,
    marginTop: 20,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: .2,
    borderRadius: 10,
    justifyContent: "space-between"
  },
  image: {
    width: 55,
    height: 55,
    paddingTop: 5,

  },
  imageContainer: {
    height: 90,
    width: "10%",
    justifyContent: 'center'

  },
  volume: {
    height: 20,
    width: 270,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center"
  },
  menuItemTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#585754"
  },
  MenuPageText1: {
    color: "#868788",
    marginBottom: 2,

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
    fontSize: 18,

  },
  price: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "space-between",
    paddingTop: 7,
    paddingBottom: 7,
    marginBottom: 7
  },
  addButton: {
    width: 85,
    height: 20,
    backgroundColor: "#7eafe8",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 4,
    marginRight: 20,

  },
  buttonText: {
    color: "white",
    fontSize: 12
  },
  Content: {
    width: 250,
    marginBottom: 15
  }
})

export default MenuItem;